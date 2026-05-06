async function kitaplariGetir() {

  let konular = ["psikoloji", "yapay zeka", "nörobilim"];

  let sonucDiv = document.getElementById("bookSonuc");
  sonucDiv.innerHTML = "";

  for (let konu of konular) {

    let url = `https://www.googleapis.com/books/v1/volumes?q=${konu}&maxResults=4`;

    let response = await fetch(url);
    let data = await response.json();

    data.items.forEach(b => {
      sonucDiv.innerHTML += `
        <div class="col-md-3 mb-4">
          <div class="card h-100 shadow-sm">
            <img src="${b.volumeInfo.imageLinks?.thumbnail || ''}" class="card-img-top">
            <div class="card-body">
              <h6>${b.volumeInfo.title}</h6>
              <p class="text-muted" style="font-size:12px;">
                ${b.volumeInfo.authors?.join(", ") || ""}
              </p>
              <span class="badge bg-primary">${konu}</span>
            </div>
          </div>
        </div>
      `;
    });

  }
}async function kitaplariGetir() {

  let konular = ["psikoloji", "yapay zeka", "nörobilim"];
  let carousel = document.getElementById("carouselContent");

  let index = 0;

  for (let konu of konular) {

    let url = `https://www.googleapis.com/books/v1/volumes?q=${konu}&maxResults=3`;
    let response = await fetch(url);
    let data = await response.json();

    data.items.forEach((b, i) => {

      let activeClass = index === 0 ? "active" : "";

      carousel.innerHTML += `
        <div class="carousel-item ${activeClass}">
          <div class="d-flex justify-content-center">
            <div class="card" style="width: 18rem;">
              <img src="${b.volumeInfo.imageLinks?.thumbnail || ''}" class="card-img-top">
              <div class="card-body">
                <h6>${b.volumeInfo.title}</h6>
                <p class="text-muted">${b.volumeInfo.authors?.join(", ") || ""}</p>
              </div>
            </div>
          </div>
        </div>
      `;

      index++;
    });

  }
}

window.onload = kitaplariGetir;