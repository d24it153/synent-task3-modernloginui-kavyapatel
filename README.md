# Synent Portal - Premium Login Page UI1

A state-of-the-art, visually stunning, and highly interactive Login Page UI designed for Synent. This interface is built with premium aesthetics, fluid animations, and robust client-side validation using vanilla HTML, CSS, and JavaScript.

## ✨ Features

- **Theme & Palette**: Modern cyberpunk neon and sleek dark glassmorphism using a custom HSL color harmony system.
- **Glassmorphic Card**: A centered login container with a `backdrop-filter` blur of `24px`, semi-transparent borders, and multiple glowing shadow depths.
- **Dynamic Background**: An ambient glowing background featuring rotating and floating color gradient orbs.
- **Micro-Interactions**:
  - CSS-driven floating input labels that transition gracefully when fields are focused or contain content.
  - Interactive "Show/Hide Password" eye toggle with instant state transitions.
  - Glowing gradients, scaling, and transit animations on the main action button.
- **Asynchronous States**: Simulates realistic authentication loading times with disabled form elements and a rotating progress spinner.
- **Custom Toast Notification System**: High-fidelity dynamic toast alert cards featuring specific icons, automatic fade-outs, and slide-in keyframe animations.
- **Cache Pre-fill System**: Built-in support to retrieve and fill user credentials on reload if the "Remember Me" option was selected.
- **Responsive Layout**: Designed mobile-first, ensuring an optimized viewing experience on mobile devices, tablets, and wide monitors.

## 📁 File Structure

```text
├── index.html   # HTML5 Semantic structure & elements
├── style.css    # High-fidelity custom glassmorphism styles
├── app.js       # Dynamic DOM interactivity & state controller
└── .gitignore   # Clean repository file exemptions
```

## 🚀 How to Run & Preview

### Option A: Local Dev Server
You can launch a local static web server to view the animations and logic flows by executing:
```bash
npx serve
```
Then navigate to `http://localhost:3000` (or the port specified in terminal) in your browser.

### Option B: Local Browser File
Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari) to preview the complete design instantly.
