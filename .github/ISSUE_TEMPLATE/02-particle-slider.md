---
name: "🎚️ Add Particle Count Slider"
about: Create a UI slider to adjust particle density
title: "[Feature] Add Particle Count Slider"
labels: ["good first issue", "help wanted", "enhancement"]
assignees: ""
---

## Goal
Add a slider (range 2000-12000) and a "Rebuild" button that adjusts the number of particles.

## Why This Matters
Different devices have different performance capabilities. Letting users adjust particle count on-the-fly makes the app accessible to everyone.

## Hints & Where to Look

1. **Particles are created in `setup()`** ([sketch.js line 34](../blob/main/sketch.js#L34)):
   ```javascript
   for (let i = 0; i < 12000; i++) {
     particles[i] = new Particle();
   }
   ```

2. **What you need to do**:
   - Add a slider using `createSlider(2000, 12000, 12000)` (min, max, default)
   - Add a button labeled "Rebuild Particles"
   - When clicked:
     - Clear the `particles` array: `particles = [];`
     - Re-run the particle initialization loop with the slider value
     - Update `cols` and `rows` if needed

3. **Helpful p5.js docs**:
   - [createSlider()](https://p5js.org/reference/#/p5/createSlider)
   - [createButton()](https://p5js.org/reference/#/p5/createButton)

## Done When
- [ ] Slider appears on screen with visible label (e.g., "Particles: 12000")
- [ ] Moving slider updates a displayed number
- [ ] Clicking "Rebuild" changes visible particle density
- [ ] No console errors
- [ ] Animation remains smooth after rebuild

## Bonus Points
- Auto-rebuild on slider change (no button needed)
- Add a "Reset to Default" button (12000 particles)
- Show FPS counter to help users find optimal particle count
