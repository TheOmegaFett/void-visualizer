---
name: "📖 Improve README Quickstart"
about: Make the README even more beginner-friendly
title: "[Docs] Improve README Quickstart"
labels: ["good first issue", "help wanted", "documentation"]
assignees: ""
---

## Goal
Enhance the README with clearer troubleshooting tips and performance guidance.

## Why This Matters
A great README helps new contributors get started without frustration. The better the docs, the more people can enjoy and contribute!

## What to Add/Improve

1. **Expand Troubleshooting Section**:
   - Add "How do I know if particles are too many?" (FPS drops, laggy mouse)
   - Add "Why are colors changing?" (explain hue shift is intentional)
   - Add "Can I change the colors?" (point to HSB values in code)

2. **Add Performance Tips**:
   - Recommended particle counts for different devices:
     - High-end desktop: 10,000-12,000
     - Laptop: 4,000-8,000
     - Mobile: 2,000-4,000
   - Explain that closing other tabs helps
   - Note that Chrome often performs better than Firefox for canvas

3. **Add "How It Works" Diagrams** (optional):
   - Flow chart showing particle → flow field → update → render loop
   - Diagram showing how flow nodes affect nearby particles
   - Audio system diagram (oscillators → panner → output)

4. **Improve Code Examples**:
   - Add comments to existing code snippets
   - Show before/after values more clearly
   - Link directly to line numbers in GitHub

## Where to Look
- Current README: [README.md](../blob/main/README.md)
- Existing troubleshooting section starts around line 120

## Done When
- [ ] At least 2 new troubleshooting Q&As added
- [ ] Performance recommendations table/list added
- [ ] All code snippets have clear comments
- [ ] Links to code are accurate
- [ ] No spelling/grammar errors

## Bonus Points
- Add GIFs or screenshots showing the visualization
- Create a "Contributing Guide" section
- Add badges (license, p5.js version, etc.)
- Include performance comparison chart (device vs recommended particle count)
