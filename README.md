# Void Visualizer

An audio-reactive particle visualization where 12,000 particles flow through evolving energy fields with real-time sound synthesis.

**[🚀 Try it Live](https://theomegafett.github.io/void-visualizer/)**

## Quick Start

1. Open `index.html` in your browser (or visit the live link above)
2. **Click anywhere** to enable audio and spawn energy nodes
3. Watch particles flow and evolve through the field
4. Press **'s'** to save a screenshot

## Controls

- **Click/Tap** - Spawn flow node + audio pulse
- **Press 's'** - Save current frame as PNG

## Performance Tips

If the animation is slow or choppy, edit line 34 in [sketch.js](sketch.js#L34):

```javascript
// Reduce from 12000 to 2000-4000 for slower devices
for (let i = 0; i < 4000; i++) {
  particles[i] = new Particle();
}
```

**Recommended particle counts:**
- Desktop: 8,000 - 12,000
- Laptop: 4,000 - 8,000  
- Mobile: 2,000 - 4,000

## How It Works

### Flow Fields
Uses custom "void algebra" functions that combine:
- Radial patterns from the center
- Sine/cosine wave interference  
- Time-based evolution with zoom
- Interactive flow nodes that decay over time

### Particles
12,000 particles that:
- Follow the flow field at their position
- Change color based on velocity direction
- Leave trails that slowly fade (entropy effect)
- Wrap to random positions at edges

### Audio
Real-time synthesis with three layers:
- **Main oscillator** (100-800 Hz) - Reacts to energy change rate
- **Bass oscillator** (30-100 Hz) - Tracks total flow energy
- **Pink noise** - Ambient texture layer
- **3D panning** - Stereo movement based on energy deltas

**Note**: Browsers require a click/tap before enabling audio.

## Customization

Edit these values in [sketch.js](sketch.js) to customize:

```javascript
let scale = 20;           // Flow field resolution (lower = smoother)
let loopDuration = 20;    // Loop length in seconds
let maxspeed = 2;         // Particle speed limit (in Particle class)
```

Mute audio by setting volumes to 0 (lines 61-63):
```javascript
mainOscillator.amp(0);    // Main tone
bassOscillator.amp(0);    // Bass
noise.amp(0);             // Ambient noise
```

## Technical Details

- **Framework**: [p5.js](https://p5js.org/) + p5.sound
- **Rendering**: HTML5 Canvas with HSB color mode
- **Audio**: Web Audio API with oscillators and 3D panning
- **Performance**: 60 FPS with 12,000 particles on modern hardware

No installation or build process required - just open `index.html`!

## Browser Support

Requires modern browser with Canvas and Web Audio API support. Tested on Chrome, Firefox, Edge, and Safari.

## License

MIT License - see [LICENSE](LICENSE)

## Created By

[TheOmegaFett](https://github.com/TheOmegaFett)
