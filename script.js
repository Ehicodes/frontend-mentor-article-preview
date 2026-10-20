'use strict'

const authorBlock = document.querySelector('.author');
const shareButton = document.querySelector('.share-btn');

shareButton.addEventListener('click', () => {
  const isActive = authorBlock.classList.toggle('author--active');

  shareButton.setAttribute('aria-expanded', isActive);
});
