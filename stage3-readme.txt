# 📜 Timeline App — Stage 3 (Task 3)

## Overview
Stage 3 builds upon Stage 2 by **loading events dynamically from JSON using JavaScript** and adding an interactive **modal popup** to view full event details.  
The layout remains responsive and perfectly aligned across devices, with compact preview cards and accessible interactions.

---

## Features Implemented

### Dynamic Content
- Fetches event data from `events.json` on page load.
- Generates event cards in the `#timeline` section dynamically using JavaScript.
- Ensures card structure matches CSS layout for perfect alignment.

### Responsive Layout
- **CSS Grid** for event cards:  
  - Two-column layout on desktop.  
  - Single-column stacking on tablet/mobile.  
- **Flexbox** for vertical card content alignment and for centering modal content.

### Event Card Styling
- White or gradient background cards with drop shadows and rounded corners.
- Fixed‑height images with `object-fit: cover` for consistent appearance.
- 3‑line truncated event descriptions for uniform card heights.
- Styled category, year, and title for clear emphasis.
- Hover scaling effect for interactivity.

### Modal Popup
- Dark semi‑transparent overlay using `position: fixed`, covers full viewport.
- Card click (or keyboard Enter/Space) opens modal with:
  - Larger event image
  - Title and year
  - Full event description
  - Category
  - **Close button** at the top right.
- Close modal by clicking the button or clicking outside the modal.

### Accessibility
- All cards have `tabindex="0"` for keyboard navigation.
- Enter/Space key opens modal when a card is focused.
- Close button labeled for assistive technologies.

### Breakpoints
- **Mobile (<900px):** Single column, reduced gaps/padding.
- **Tablet (900–1023px):** Single column, larger padding.
- **Desktop (≥1024px):** Two-column grid, centered container.

---

## Files for Stage 3
- `index.html` – HTML structure with empty `#timeline` container and modal markup.
- `styles.css` – Layout, styling, and responsive rules for cards and modal.
- `script.js` – Dynamic content loading, modal open/close logic.
- `events.json` – Event data array with image paths, descriptions, etc.
- `/images` – Image files referenced by `events.json`.

---

## How to View

1. **Run a local server** (required for `fetch()` to load `events.json`):
   - **VS Code Live Server Extension:** Right‑click `index.html` → *Open with Live Server*  
   - **OR** Python 3:
     ```
     python -m http.server
     ```
     Then visit `http://localhost:8000` in your browser.

2. **Test Responsiveness**  
   Resize the browser window to see mobile, tablet, and desktop layouts.

3. **Interact with Modals**
   - Click (or press Enter/Space on) any event card to open the modal.
   - Close via close button or by clicking the overlay.

---

