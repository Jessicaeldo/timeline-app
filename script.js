document.addEventListener('DOMContentLoaded', () => {
  const timeline = document.getElementById('timeline');
  const modal = document.getElementById('modal');
  const modalContent = document.querySelector('.modal-content');

  // Load and render events dynamically
  fetch('events.json')
    .then(res => res.json())
    .then(events => {
      events.forEach(ev => {
        const card = document.createElement('div');
        card.className = 'event-card';
        card.tabIndex = 0; // For accessibility

        card.innerHTML = `
          <img src="${ev.imageURL}" alt="${ev.title}" class="event-image">
          <div class="event-content">
            <div class="event-year">${ev.year}</div>
            <div class="event-title">${ev.title}</div>
            <p class="event-description">${ev.description.length > 100 ? ev.description.slice(0, 100) + '…' : ev.description}</p>
            <div class="event-category">Category: ${ev.category}</div>
          </div>
        `;

        // Open modal on click or keypress (Enter/Space)
        card.addEventListener('click', () => openModal(ev));
        card.addEventListener('keydown', e => {
          if (e.key === 'Enter' || e.key === ' ') openModal(ev);
        });

        timeline.appendChild(card);
      });
    })
    .catch(err => {
      timeline.innerHTML = '<p style="color:red">Error loading events. Check file paths.</p>';
    });

  function openModal(ev) {
    modalContent.innerHTML = `
      <button class="modal-close" id="modal-close" aria-label="Close modal">&times;</button>
      <img src="${ev.imageURL}" alt="${ev.title}">
      <h2>${ev.title} <span style="font-size:1rem;color:#0074d9;">(${ev.year})</span></h2>
      <p>${ev.description}</p>
      <div class="event-category">Category: ${ev.category}</div>
    `;
    modal.classList.add('show');

    document.getElementById('modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', clickOutsideToClose);
  }

  function closeModal() {
    modal.classList.remove('show');
    modalContent.innerHTML = '';
    modal.removeEventListener('click', clickOutsideToClose);
  }

  function clickOutsideToClose(e) {
    if (e.target === modal) closeModal();
  }
});
