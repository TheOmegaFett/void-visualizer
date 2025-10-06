# Void Visualizer

An immersive audio-reactive particle flow field visualization built with p5.js. Watch 12,000 particles dance through dynamically evolving flow fields with real-time audio synthesis.

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
