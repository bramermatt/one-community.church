// Selecting all gallery containers
const galleries = document.querySelectorAll('.gallery');

// Modal elements
const galleryModal = document.getElementById('myGalleryModal');
const galleryModalImg = document.getElementById('galleryModalImg');
const galleryCaption = document.getElementById('galleryCaption');
const dotsContainer = document.querySelector('.gallery-dots-container');

// Variables to track current gallery and slide index
let currentGallery = null;
let currentGallerySlide = 0;

// Function to open the modal and display gallery items
function openGalleryModal(galleryId, index) {
    currentGallery = document.getElementById(galleryId);
    currentGallerySlide = index;
    updateModalContent();
    updateGalleryDots();
    
    galleryModal.style.display = 'block';
    galleryModal.style.zIndex = 9999; // Force modal to the front
    document.body.classList.add('modal-open');
    
    // Scroll to the top when opening the modal
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Set initial focus inside the modal for accessibility
    galleryModalImg.focus();
}

// Function to close the modal
function closeGalleryModal() {
    galleryModal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

// Function to change gallery slide (next or previous)
function changeGallerySlide(n) {
    currentGallerySlide += n;
    if (currentGallerySlide >= currentGallery.children.length) {
        currentGallerySlide = 0;
    } else if (currentGallerySlide < 0) {
        currentGallerySlide = currentGallery.children.length - 1;
    }
    updateModalContent();
    updateGalleryDots();
}

// Function to update modal content (image and caption)
function updateModalContent() {
    const currentItem = currentGallery.querySelector('.gallery-item:nth-child(' + (currentGallerySlide + 1) + ')');
    const imgSrc = currentItem.querySelector('img').src;
    const captionHTML = currentItem.querySelector('.gallery-caption').innerHTML;

    galleryModalImg.src = imgSrc;
    galleryCaption.innerHTML = captionHTML;
}

// Function to update gallery dots based on the current gallery
function updateGalleryDots() {
    dotsContainer.innerHTML = '';

    currentGallery.querySelectorAll('.gallery-item').forEach((item, index) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (index === currentGallerySlide) {
            dot.classList.add('active');
        }
        dot.addEventListener('click', () => {
            openGalleryModal(currentGallery.id, index);
        });
        dotsContainer.appendChild(dot);
    });
}

// Close modal when clicking on the close button
document.querySelector('.close').addEventListener('click', closeGalleryModal);

// Close modal when clicking outside the modal content
window.addEventListener('click', function(event) {
    if (event.target === galleryModal) {
        closeGalleryModal();
    }
});

// Keyboard navigation for modal gallery slides
document.addEventListener('keydown', function(event) {
    if (galleryModal.style.display === 'block') { // Ensure modal is open
        if (event.key === 'ArrowLeft') {
            changeGallerySlide(-1); // Previous slide
        } else if (event.key === 'ArrowRight') {
            changeGallerySlide(1); // Next slide
        } else if (event.key === 'Escape') {
            closeGalleryModal(); // Close modal on Esc key
        }
    }
});

// Focus trap for accessibility
galleryModal.addEventListener('keydown', function(event) {
    const focusableElements = galleryModal.querySelectorAll('a, button, img, .close');
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.key === 'Tab') {
        if (event.shiftKey) { // Shift + Tab
            if (document.activeElement === firstElement) {
                lastElement.focus();
                event.preventDefault();
            }
        } else { // Tab
            if (document.activeElement === lastElement) {
                firstElement.focus();
                event.preventDefault();
            }
        }
    }
});
