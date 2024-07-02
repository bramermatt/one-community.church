let currentSection = 0;
const sections = document.querySelectorAll('.split-pane');

function scrollToSection(index) {
    sections[index].scrollIntoView({ behavior: 'smooth' });
}

function handleScroll(event) {
    currentSection = Math.min(Math.max(currentSection + (event.deltaY > 0 ? 1 : -1), 0), sections.length - 1);
    scrollToSection(currentSection);
}

function handleTouch(event) {
    if (event.type === 'touchstart') {
        this.yDown = event.touches[0].clientY;
    } else if (event.type === 'touchmove') {
        if (!this.yDown) return;
        let yDiff = this.yDown - event.touches[0].clientY;
        currentSection = Math.min(Math.max(currentSection + (yDiff > 0 ? 1 : -1), 0), sections.length - 1);
        scrollToSection(currentSection);
        this.yDown = null;
    }
}

document.addEventListener('wheel', handleScroll);
document.addEventListener('touchstart', handleTouch);
document.addEventListener('touchmove', handleTouch);
