function scrollCarousel(wrapperId, direction) {
  const wrapper = document.getElementById(wrapperId);
  const container = wrapper.querySelector('.carousel-container');
  const slideWidth = container.scrollWidth / container.childElementCount;
  const newScrollLeft = container.scrollLeft + (slideWidth * direction);

  container.scrollTo({
      left: newScrollLeft,
      behavior: 'smooth'
  });

  // Ensure arrows are updated after scroll completes
  setTimeout(() => updateArrows(wrapperId), 100); // Adjust timeout if necessary
}

function updateArrows(wrapperId) {
  const wrapper = document.getElementById(wrapperId);
  const container = wrapper.querySelector('.carousel-container');
  const leftArrow = wrapper.querySelector('.arrow-left');
  const rightArrow = wrapper.querySelector('.arrow-right');

  if (container.scrollLeft <= 0) {
      leftArrow.classList.add('hidden');
  } else {
      leftArrow.classList.remove('hidden');
  }

  if (container.scrollLeft + container.clientWidth >= container.scrollWidth) {
      rightArrow.classList.add('hidden');
  } else {
      rightArrow.classList.remove('hidden');
  }
}

document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
  wrapper.querySelector('.carousel-container').addEventListener('scroll', () => {
      updateArrows(wrapper.id);
  });
});

// Initialize arrows visibility on page load
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.carousel-wrapper').forEach(wrapper => {
      updateArrows(wrapper.id);
  });
});