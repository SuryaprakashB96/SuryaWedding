document.addEventListener("DOMContentLoaded", function() {
    const photosContainer = document.querySelector('.photos');
    const photos = document.querySelectorAll('.photos img');
    let currentIndex = 0;

    function updateActiveImage() {
        photos.forEach((img, index) => {
            img.classList.toggle('active', index === currentIndex);
        });
    }

    function setActiveImage() {
        const imageWidth = photos[0].clientWidth + 20; // Account for margins
        const scrollLeft = photosContainer.scrollLeft;
        currentIndex = Math.round(scrollLeft / imageWidth);
        updateActiveImage();
    }

    // Initialize with the first image active
    updateActiveImage();

    // Add scroll event listener to update active image
    photosContainer.addEventListener('scroll', setActiveImage);

    // Set active image on click
    photosContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG') {
            currentIndex = Array.from(photos).indexOf(e.target);
            updateActiveImage();
        }
    });
});
