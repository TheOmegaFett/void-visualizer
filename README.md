# Void Visualizer

An immersive audio-reactive particle flow field visualization built with p5.js. Watch 12,000 particles dance through dynamically evolving flow fields with real-time audio synthesis.

**🚀 [Try it now!](https://theomegafett.github.io/void-visualizer/)** *(After GitHub Pages is enabled)*

## Quickstart (TL;DR)

1. **Open the live link** (see above) or open `index.html` locally
2. **Click anywhere** on the screen to unlock audio and spawn flow nodes
3. **Press 's'** to save the current frame as a PNG
4. **Keep clicking** to add more energy nodes and watch them interact
5. **If it's slow**, see [Beginner Safe Mode](#beginner-safe-mode) below

## Beginner Safe Mode

If performance is sluggish on your laptop or mobile device, edit these values in [sketch.js](sketch.js):

**Line 34**: Reduce particle count for better performance
```javascript
// Change from 12000 to 2000-4000 for slower devices
for (let i = 0; i < 4000; i++) {  // was 12000
  particles[i] = new Particle();
}
```

**Lines 61-63**: Adjust audio volumes (or mute completely)
```javascript
mainOscillator.amp(0.05);  // Set to 0 to mute main tone
bassOscillator.amp(0.03);  // Set to 0 to mute bass
noise.amp(0.005);          // Set to 0 to mute ambient noise
```

**Note**: Audio requires user interaction (click/tap) to start due to browser autoplay policies. Your first click unlocks Web Audio.

## Features

### Visual
- **12,000 Particles** - Flowing particles with velocity-based color and trail rendering
- **Dynamic Flow Fields** - Multi-layered fractal flow patterns using custom void algebra functions
- **Interactive Flow Nodes** - Click to spawn energy nodes that influence particle movement
- **Looping Animation** - 20-second seamless loop with zoom and hue rotation effects
- **Entropy Fade** - Organic trail decay for ethereal visual persistence

### Audio
- **Generative Soundscape** - Real-time audio synthesis reacting to particle flow energy
- **Multi-Oscillator System** - Sine, triangle, and pink noise oscillators for rich textures
- **3D Panning** - Stereo panning based on flow energy changes
- **Breathing Modulation** - Subtle frequency modulation for organic movement
- **Interactive Pulses** - Audio spikes triggered by mouse clicks

### Technical
- **HSB Color Mode** - Dynamic hue shifts based on particle velocity direction
- **Custom Flow Algorithm** - `voidAlgebraFlow()` function with fractal layering
- **Performance Optimized** - Smooth 60 FPS with thousands of particles
- **Responsive Canvas** - Adapts to window size

## Installation

1. Clone the repository:
```bash
git clone https://github.com/TheOmegaFett/void-visualizer.git
cd void-visualizer
```

2. Open `index.html` in a modern web browser

That's it! No build process required.

## Usage

### Controls
- **Click/Tap** - Spawn a new flow node at cursor position
- **Press 's'** - Save current frame as PNG image

### Flow Nodes
- Flow nodes create attraction/repulsion fields
- Nodes decay over time (strength fades by 1% per frame)
- Nodes are removed when strength drops below 0.05

## How It Works

### Void Algebra Flow
The custom `voidAlgebraFlow()` function creates flow patterns by combining:
- Radial distance from center
- Sine/cosine wave interference
- Time-based evolution
- Zoom scaling effects

### Particle System
Each particle:
- Follows the flow field at its grid position
- Has radial outward drift (0.02 magnitude)
- Colors based on velocity direction and speed
- Wraps to random position at canvas edges

### Audio Synthesis
- **Main Oscillator** (100-800 Hz) - Frequency mapped to flow energy change rate
- **Bass Oscillator** (30-100 Hz) - Frequency mapped to total flow energy
- **Pink Noise** - Ambient texture layer (low amplitude)
- **Panning** - Left/right based on energy delta

## Configuration

Key parameters in `sketch.js`:

```javascript
let scale = 20;              // Flow field grid resolution
let inc = 0.05;              // Perlin noise increment
let loopDuration = 20;       // Loop duration in seconds
let particles = 12000;       // Number of particles
```

Audio levels:
```javascript
mainOscillator.amp(0.05);    // Main tone volume
bassOscillator.amp(0.03);    // Bass volume
noise.amp(0.005);            // Noise volume
```

## Troubleshooting

**Problem**: No sound when I open the page  
**Solution**: Click anywhere on the canvas. Browsers require user interaction before enabling audio.

**Problem**: Slow/choppy animation  
**Solution**: Reduce particles to 2000-4000 in [sketch.js](sketch.js#L34). Close other browser tabs.

**Problem**: Can't see flow nodes when I click  
**Solution**: Look for subtle circular pulses. They fade after 30 frames (~0.5 seconds).

**Problem**: Page won't load  
**Solution**: Make sure you have internet connection (loads p5.js from CDN). Or download p5.js locally.

## Browser Compatibility

Requires modern browser with:
- HTML5 Canvas support
- Web Audio API
- ES6+ JavaScript

Tested on Chrome, Firefox, Edge, and Safari.

## License

MIT License - see [LICENSE](LICENSE) file for details.

## Author

Created by [TheOmegaFett](https://github.com/TheOmegaFett)

## Acknowledgments

Built with [p5.js](https://p5js.org/) - A JavaScript library for creative coding
