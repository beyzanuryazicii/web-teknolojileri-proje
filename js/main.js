let images = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg"
];

let links = [
    "yer1.html",
    "yer2.html",
    "yer3.html",
    "yer4.html"
];

let index = 0;

function showImage() {
    document.getElementById("sliderImage").src = images[index];
    document.getElementById("sliderLink").href = links[index];
}

function next() {
    index = (index + 1) % images.length;
    showImage();
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

// Otomatik geçiş
setInterval(next, 3000);