---
name: "🔇 Add Mute/Unmute Toggle Button"
about: Create a UI button to toggle audio on/off
title: "[Feature] Add Mute/Unmute Toggle Button"
labels: ["good first issue", "help wanted", "enhancement"]
assignees: ""
---

## Goal
Add a small button that toggles all audio oscillators on/off (mute/unmute).

## Why This Matters
Users might want to enjoy the visuals without sound, or need to mute quickly during meetings/calls.

## Hints & Where to Look

1. **Audio oscillators are set up in `setup()`** ([sketch.js lines 61-63](../blob/main/sketch.js#L61-L63)):
   ```javascript
   mainOscillator.amp(0.05);
   bassOscillator.amp(0.03);
   noise.amp(0.005);
   ```

2. **What you need to do**:
   - Add a boolean variable like `let isMuted = false;`
   - Create a button in HTML or using p5.js `createButton()`
   - When clicked, toggle between:
     - **Muted**: Set all `.amp()` to `0`
     - **Unmuted**: Restore to original values (0.05, 0.03, 0.005)

3. **Helpful p5.js docs**:
   - [createButton()](https://p5js.org/reference/#/p5/createButton)
   - [Oscillator.amp()](https://p5js.org/reference/#/p5.Oscillator/amp)

## Done When
- [ ] Clicking the button mutes all audio
- [ ] Clicking again unmutes to original volumes
- [ ] No console errors
- [ ] Button is visible and styled (even basic CSS is fine!)

## Bonus Points
- Add keyboard shortcut (e.g., press 'm' to mute)
- Show button state (e.g., "🔇 Muted" vs "🔊 Sound On")
