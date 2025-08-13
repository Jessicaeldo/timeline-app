// Fetch events JSON, render timeline, and handle modal interactions
document.addEventListener('DOMContentLoaded', () => {
  const timelineSection = document.getElementById('timeline');
  const modal = document.getElementById('modal');
  const modalContent = modal.querySelector('.modal-content');

  // Modal close helper (adds a close button dynamically)
  function closeModal() {
    modal.style.display = 'none';
    // Clean up modal contents except for the close button
    modalContent.innerHTML = '';
  }

  // Render modal with event details
  function openModal(event) {
    modalContent.innerHTML = `
      <button id="modal-close" aria-label="Close modal" style="position:absolute;top:0.7rem;right:1rem;font-size:1.5rem;background:none;border:none;cursor:pointer;">&times;</button>
      <h2>${event.title} <span style="font-size:1rem;color:#0074d9; font-weight:400;">(${event.year})</span></h2>
      <img src="${event.imageURL}" alt="${event.title}" style="margin:1rem 0;border-radius:8px;max-width:100px;">
      <p>${event.description}</p>
      <p style="font-size:0.95rem;color:#888;margin-top:1.5rem;">Category: ${event.category}</p>
    `;
    modal.style.display = 'flex';
    document.getElementById('modal-close').addEventListener('click', closeModal);
    // Optional: allow click outside modal to close
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    }, { once: true });
  }

  // Render timeline card as per your CSS structure
  function renderEventCard(event) {
    const card = document.createElement('article');
    card.className = 'event';
    card.tabIndex = 0; // Make it focusable

    card.innerHTML = `
      <figure>
        <img src="${event.imageURL}" alt="${event.title}">
        <figcaption>${event.title}</figcaption>
      </figure>
      <div>
        <span style="display:block;font-size:0.98rem;color:#3777dc;font-weight:600; margin-bottom:0.25rem;">${event.year}</span>
        <p>${event.description.length > 80 ? event.description.slice(0, 77) + '...' : event.description}</p>
      </div>
    `;
    // Click and Enter/Space open modal
    card.addEventListener('click', () => openModal(event));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') openModal(event);
    });
    return card;
  }

  // Fetch json and populate timeline
  fetch('events.json')
    .then(res => res.json())
    .then(events => {
      // Optionally sort by year or any order
      events.sort((a, b) => a.year - b.year);
      events.forEach(event => {
        const card = renderEventCard(event);
        timelineSection.appendChild(card);
      });
    })
    .catch(err => {
      timelineSection.innerHTML = `<div style="color:#B00"><b>Error loading events: </b>${err}</div>`;
    });
});
