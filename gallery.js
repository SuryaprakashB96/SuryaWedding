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
    document.querySelector('.photos').addEventListener('scroll', () => {
        const scrollLeft = document.querySelector('.photos').scrollLeft;
        const imageWidth = images[0].clientWidth + 20; // Account for margins
        currentIndex = Math.round(scrollLeft / imageWidth);
        updateActiveImage();
    });

    // Optional: Add event listener for image clicks if desired
    document.querySelector('.photos').addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            currentIndex = Array.from(images).indexOf(e.target);
            updateActiveImage();
        }
    });
});
