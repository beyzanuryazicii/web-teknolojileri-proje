async function filmleriGetir() {

  const kategoriler = [
    "science fiction",
    "artificial intelligence",
    "space",
    "psychology"
  ];

  const carousel = document.getElementById("carouselContent");

  carousel.innerHTML = "";

  let index = 0;

  // TMDB API Key
  const apiKey = "8ea576f8d7114b7e9f377721d2235497";

  for (const kategori of kategoriler) {

    try {

      const url =
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${kategori}&language=tr-TR`;

      const response = await fetch(url);

      const data = await response.json();

      if (!data.results) continue;

      data.results.slice(0, 3).forEach((film) => {

        const activeClass = index === 0 ? "active" : "";

        const poster = film.poster_path
          ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
          : "https://via.placeholder.com/500x750?text=Film";

        carousel.innerHTML += `

          <div class="carousel-item ${activeClass}">

            <div class="d-flex justify-content-center">

              <div class="card movie-card shadow-lg border-0">

                <img
                  src="${poster}"
                  class="card-img-top"
                  alt="${film.title}"
                >

                <div class="card-body">

                  <h5 class="card-title">
                    ${film.title}
                  </h5>

                  <p class="text-muted">
                    ⭐ ${film.vote_average}
                  </p>

                  <p class="card-text small">
                    ${
                      film.overview
                        ? film.overview.substring(0, 120) + "..."
                        : "Açıklama bulunamadı."
                    }
                  </p>

                </div>

              </div>

            </div>

          </div>

        `;

        index++;

      });

    } catch (error) {

      console.log("API Hatası:", error);

    }

  }
}
window.onload = filmleriGetir;