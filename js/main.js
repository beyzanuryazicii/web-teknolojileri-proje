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


function konuAra() {

    let kelime = document.getElementById("arama").value;

    fetch(`https://en.wikipedia.org/api/rest_v1/page/summary/${kelime}`)
    .then(res => res.json())
    .then(data => {

        if (data.type === "https://mediawiki.org/wiki/HyperSwitch/errors/not_found") {
            document.getElementById("sonuclar").innerHTML = "Sonuç bulunamadı ❌";
            return;
        }

        document.getElementById("sonuclar").innerHTML = `
            <div class="card mx-auto p-3" style="max-width:600px;">
                <h4>${data.title}</h4>
                <p>${data.extract}</p>
                ${data.thumbnail ? `<img src="${data.thumbnail.source}">` : ""}
            </div>
        `;
    });
}

// NATIVE JS VALIDATION
function jsKontrol() {

    let ad = document.getElementById("ad").value;
    let email = document.getElementById("email").value;
    let telefon = document.getElementById("telefon").value;

    let hata = "";

    if (ad === "") {
        hata += "Ad boş olamaz<br>";
    }

    if (!email.includes("@")) {
        hata += "Geçerli email giriniz<br>";
    }

    if (!/^[0-9]+$/.test(telefon)) {
        hata += "Telefon sadece rakam olmalı<br>";
    }

    document.getElementById("hata").innerHTML = hata || "JS kontrol başarılı ✅";
}


// VUE VALIDATION
const app = Vue.createApp({

    methods: {
        vueKontrol() {

            let ad = document.getElementById("ad").value;
            let email = document.getElementById("email").value;

            let hata = "";

            if (ad.length < 3) {
                hata += "Ad en az 3 karakter olmalı<br>";
            }

            if (!email.includes("@")) {
                hata += "Email hatalı<br>";
            }

            document.getElementById("hata").innerHTML = hata || "Vue kontrol başarılı ✅";
        }
    }

});

app.mount("body");