const images = [
  {
    img: "img/img1.jpg",
    link: "https://tr.wikipedia.org/wiki/%C5%9Eeyh_Edebali"
  },

  {
    img: "img/img2.jpg",
    link: "https://tr.wikipedia.org/wiki/S%C3%B6%C4%9F%C3%BCt"
  },

  {
    img: "img/img3.jpg",
    link: "https://tr.wikipedia.org/wiki/Bilecik"
  },

  {
    img: "img/img4.jpg",
    link: "https://tr.wikipedia.org/wiki/Bilecik"
  }
];

let current = 0;

const sliderImage = document.getElementById("sliderImage");
const sliderLink = document.getElementById("sliderLink");

function showSlide(index){

  sliderImage.style.opacity = 0;

  setTimeout(() => {

    sliderImage.src = images[index].img;
    sliderLink.href = images[index].link;

    sliderImage.style.opacity = 1;

  }, 250);

}

function next(){

  current++;

  if(current >= images.length){
    current = 0;
  }

  showSlide(current);

}

function prev(){

  current--;

  if(current < 0){
    current = images.length - 1;
  }

  showSlide(current);

}

setInterval(next, 4000);

showSlide(current);

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


