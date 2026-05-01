let images = [
    "img/img1.jpg",
    "img/img2.jpg",
    "img/img3.jpg",
    "img/img4.jpg"
];

let index = 0;

function showImage() {
    document.getElementById("sliderImage").src = images[index];
}

function next() {
    index = (index + 1) % images.length;
    showImage();
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

setInterval(next, 3000);