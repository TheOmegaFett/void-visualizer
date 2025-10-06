---
name: "📱 Add Mobile Touch Support"
about: Make touch events spawn flow nodes like mouse clicks
title: "[Feature] Add Mobile Touch Support"
labels: ["good first issue", "help wanted", "mobile"]
assignees: ""
---

## Goal
Allow mobile users to tap the screen and spawn flow nodes, just like desktop users can click.

## Why This Matters
The app currently only responds to mouse clicks. Mobile users should have the same interactive experience!

## Hints & Where to Look

1. **Mouse clicks spawn nodes** ([sketch.js lines 257-269](../blob/main/sketch.js#L257-L269)):
   ```javascript
   function mousePressed() {
     let nodeX = floor(mouseX / scale);
     let nodeY = floor(mouseY / scale);
     flowNodes.push({ x: nodeX, y: nodeY, strength: random(3, 5) });
     
     pulseFrames = 30;
     pulseX = mouseX;
     pulseY = mouseY;
     
     mainOscillator.freq(800);
     bassOscillator.freq(100);
   }
   ```

2. **What you need to do**:
   - Add a `touchStarted()` function (p5.js calls this on touch)
   - Use `touches[0].x` and `touches[0].y` instead of `mouseX/mouseY`
   - Or simply call the same logic from both functions

3. **Helpful p5.js docs**:
   - [touchStarted()](https://p5js.org/reference/#/p5/touchStarted)
   - [touches array](https://p5js.org/reference/#/p/touches)

## Done When
- [ ] Tapping on mobile/tablet spawns a flow node
- [ ] Tapping triggers visual pulse ring
- [ ] Tapping triggers audio spike
- [ ] No console errors on mobile browsers

## Bonus Points
- Support multi-touch (spawn multiple nodes at once)
- Add `touchMoved()` to spawn continuous nodes while dragging
- Prevent default touch behavior to avoid scrolling while interacting
