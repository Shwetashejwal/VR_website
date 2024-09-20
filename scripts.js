
function showPossibilities() {
    document.querySelector('.possibilities').style.display = 'block';
}

function showImage(category) {
    const image = document.getElementById('main-image');
    const title = document.getElementById('image-title');
    const description = document.getElementById('image-description');

    if (category === 'sci-fi') {
        image.src = 'img\sci-fi.png';
        title.textContent = 'SCI-FI';
        description.textContent = 'Explore the future.';
    } else if (category === 'nature') {
        image.src = 'img\nature.png';
        title.textContent = 'NATURE';
        description.textContent = 'Embrace the beauty of nature.';
    } else if (category === 'gaming') {
        image.src = 'img\gaming.png';
        title.textContent = 'GAMING';
        description.textContent = 'Play beyond reality.';
    } else if (category === 'drive') {
        image.src = 'img\driving.png';
        title.textContent = 'DRIVE';
        description.textContent = 'Experience the thrill of driving.';
    }

    document.querySelectorAll('.buttons .button').forEach(button => {
        button.classList.remove('active');
    });
    document.querySelector(`.buttons .button[onclick="showImage('${category}')"]`).classList.add('active');
}