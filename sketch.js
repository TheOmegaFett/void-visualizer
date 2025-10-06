let particles = [];
let cols, rows;
let flowfield;
let flowNodes = [];

let scale = 20;
let inc = 0.05;
let loopDuration = 20; // seconds for full loop
let totalFrames = loopDuration * 60;

let flowEnergy = 0;
let previousFlowEnergy = 0;

// Sound
let mainOscillator;
let bassOscillator;
let noise;
let panner;

// Visual pulse
let pulseFrames = 0;
let pulseX = 0;
let pulseY = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(60);
  colorMode(HSB, 360, 100, 100, 100);
  cols = floor(width / scale);
  rows = floor(height / scale);
  flowfield = new Array(cols * rows);

  // Initialize particles
  for (let i = 0; i < 12000; i++) {
    particles[i] = new Particle();
  }

  // Initial central flow node
  flowNodes.push({ x: cols / 2, y: rows / 2, strength: 3 });

  // Audio setup
  userStartAudio();

  mainOscillator = new p5.Oscillator("sine");
  bassOscillator = new p5.Oscillator("triangle");
  noise = new p5.Noise("pink");
  panner = new p5.Panner3D();

  mainOscillator.disconnect();
  mainOscillator.connect(panner);
  bassOscillator.disconnect();
  bassOscillator.connect(panner);
  noise.disconnect();
  noise.connect(panner);
  panner.set(0, 0, 0);

  mainOscillator.start();
  bassOscillator.start();
  noise.start();

  mainOscillator.amp(0.05);
  bassOscillator.amp(0.03);
  noise.amp(0.005);

  background(0);
}

function draw() {
  // Entropy fade
  noStroke();
  fill(0, 0, 0, 10);
  rect(0, 0, width, height);

  let t = ((frameCount % totalFrames) / totalFrames) * TWO_PI;
  let zoom = pow(1.02, frameCount % totalFrames);

  let globalHueShift = ((frameCount % totalFrames) / totalFrames) * 360;

  flowEnergy = 0;

  // Generate flow field with fractal layers and flow nodes
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let index = x + y * cols;

      let angle1 = voidAlgebraFlow(x, y, t, zoom, 0.15, 0.15, 1.2);
      let angle2 = voidAlgebraFlow(x, y, t * 1.5, zoom * 1.2, 0.25, 0.25, 0.7);

      let nodeEffect = 0;
      for (let node of flowNodes) {
        let dx = (x - node.x) * zoom;
        let dy = (y - node.y) * zoom;
        let dist = sqrt(dx * dx + dy * dy) + 0.0001;
        nodeEffect += cos(dist * 0.2 - t * 2) * node.strength;
      }

      let angle = angle1 + angle2 + nodeEffect;
      let v = p5.Vector.fromAngle(angle);
      v.setMag(1);
      flowfield[index] = v;
    }
  }

  strokeWeight(1);

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show(globalHueShift);
  }

  // Visual pulse feedback
  if (pulseFrames > 0) {
    noFill();
    stroke(0, 0, 100, 30);
    strokeWeight(3);
    ellipse(pulseX, pulseY, pulseFrames * 10);
    pulseFrames--;
  }

  // Audio dynamics
  let energyChange = flowEnergy - previousFlowEnergy;
  previousFlowEnergy = flowEnergy;

  let breathingModulation = sin(frameCount * 0.02);

  let mainFreq = map(
    energyChange,
    -particles.length * 0.1,
    particles.length * 0.1,
    100,
    800
  );
  mainOscillator.freq(
    lerp(
      mainOscillator.freq().value,
      constrain(mainFreq + breathingModulation * 50, 100, 800),
      0.1
    )
  );

  let bassFreq = map(flowEnergy, 0, particles.length * 2, 40, 80);
  bassOscillator.freq(
    lerp(
      bassOscillator.freq().value,
      constrain(bassFreq + breathingModulation * 10, 30, 100),
      0.1
    )
  );

  let pan = map(
    energyChange,
    -particles.length * 0.1,
    particles.length * 0.1,
    -1,
    1
  );
  panner.set(pan, 0, 0);

  // Flow node decay
  for (let node of flowNodes) {
    node.strength *= 0.99; // Fade nodes
  }
  flowNodes = flowNodes.filter((node) => node.strength > 0.05);
}

// Flow function with parameters
function voidAlgebraFlow(x, y, t, zoom, freqX, freqY, amplitude) {
  let cx = cols / 2;
  let cy = rows / 2;

  let dx = (x - cx) * zoom;
  let dy = (y - cy) * zoom;

  let distance = sqrt(dx * dx + dy * dy) + 0.0001;
  let angle = atan2(dy, dx);

  let flow = angle;
  flow += sin(dx * freqX + t) * cos(dy * freqY - t) * amplitude;
  flow += cos(distance * 0.2 - t * 2) * 0.7;

  return flow;
}

class Particle {
  constructor() {
    this.pos = createVector(random(width), random(height));
    this.vel = createVector(0, 0);
    this.acc = createVector(0, 0);
    this.maxspeed = 2;
    this.hue = random(360);
  }

  follow(vectors) {
    let x = floor(this.pos.x / scale);
    let y = floor(this.pos.y / scale);
    let index = x + y * cols;
    let force = vectors[index];
    if (force) {
      this.applyForce(force);
    }

    let radial = p5.Vector.sub(this.pos, createVector(width / 2, height / 2));
    radial.normalize().mult(0.02);
    this.applyForce(radial);
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);

    flowEnergy += this.vel.mag();
  }

  show(globalHueShift) {
    let angle = this.vel.heading();
    let speed = this.vel.mag();

    let hue = (degrees(angle) + globalHueShift + 360) % 360;
    let sat = constrain(speed * 60, 40, 100);

    let brightModulation = 0.7 + 0.3 * sin((globalHueShift * PI) / 180);
    let bright = map(speed, 0, this.maxspeed, 60, 100) * brightModulation;

    stroke(hue, sat, bright, 15);

    let trailLength = map(speed, 0, this.maxspeed, 1, 5);
    line(
      this.pos.x,
      this.pos.y,
      this.pos.x - this.vel.x * trailLength,
      this.pos.y - this.vel.y * trailLength
    );
  }

  edges() {
    if (
      this.pos.x > width ||
      this.pos.x < 0 ||
      this.pos.y > height ||
      this.pos.y < 0
    ) {
      this.pos = createVector(random(width), random(height));
      this.vel.mult(0);
    }
  }
}

// Click to spawn new flow node with pulse and audio spike
function mousePressed() {
  let nodeX = floor(mouseX / scale);
  let nodeY = floor(mouseY / scale);
  flowNodes.push({ x: nodeX, y: nodeY, strength: random(3, 5) });

  pulseFrames = 30;
  pulseX = mouseX;
  pulseY = mouseY;

  // Optional: trigger audio pulse
  mainOscillator.freq(800);
  bassOscillator.freq(100);
}

// Optional: Save frames manually
function keyPressed() {
  if (key === "s") {
    saveCanvas("void-algebra-cosmos", "png");
  }
}
