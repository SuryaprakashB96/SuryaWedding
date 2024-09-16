document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.photos img');
    let currentIndex = 0;

    function updateActiveImage() {
        images.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
    }

    // Initialize with the first image active
    updateActiveImage();

    // Add click event to change the active image
    document.querySelector('.photos').addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            currentIndex = Array.from(images).indexOf(e.target);
            updateActiveImage();
        }
    });
});
