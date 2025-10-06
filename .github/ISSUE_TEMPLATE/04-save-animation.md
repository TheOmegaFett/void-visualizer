---
name: Add "Record Animation" Button
about: Save a short video/GIF capture of the visualization
labels: good first issue, help wanted, enhancement
---

## Goal
Add a button that records 5 seconds of the animation and saves it as a downloadable file.

## Why This Matters
Users want to share their creations on social media! Currently they can only save single frames (press 's').

## Hints & Where to Look

1. **Single frame save exists** ([sketch.js lines 272-276](../blob/main/sketch.js#L272-L276)):
   ```javascript
   function keyPressed() {
     if (key === "s") {
       saveCanvas("void-algebra-cosmos", "png");
     }
   }
   ```

2. **What you need to do** (pick one approach):

   **Option A - Simple Frame Sequence**:
   - Add a `let isRecording = false;` flag
   - When button clicked, set `isRecording = true`
   - In `draw()`, if recording, call `saveCanvas()` with incremented filenames
   - Stop after 300 frames (5 seconds at 60fps)
   - User can stitch frames into GIF/video with external tools

   **Option B - Use p5.js GIF Library** (more advanced):
   - Include [gif.js](https://github.com/jnordberg/gif.js) library
   - Capture frames to a GIF encoder
   - Download single `.gif` file when done

3. **Helpful resources**:
   - [saveCanvas()](https://p5js.org/reference/#/p5/saveCanvas)
   - [createButton()](https://p5js.org/reference/#/p5/createButton)

## Done When
- [ ] Button appears with label like "🎥 Record 5s"
- [ ] Clicking starts recording
- [ ] After 5 seconds, files are saved or download starts
- [ ] Button shows recording state (e.g., "Recording..." with countdown)
- [ ] No console errors

## Bonus Points
- Show progress bar during recording
- Allow custom duration (slider for 3-10 seconds)
- Add option to record at lower resolution for smaller file sizes
- Include audio export (very advanced!)
