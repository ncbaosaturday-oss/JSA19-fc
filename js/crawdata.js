const apikey = '7ed08af517d451b8625b5ab427593623';


// lấy thông tin phim từ API
function getDSPhim() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}&language=vi-VN&page=1`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            showListFilm(data);
        });
}
// Hiển thị danh sách phim ra trang chủ
function showListFilm(data) {
    let movieLists = data.results;
    const movieList = document.getElementById("movie-list");
    // Duyệt qua danh sách phim
    movieList.innerHTML = movieLists.map((film) => {
        return `
        <div class="movie-card">
            <img 
                src="https://image.tmdb.org/t/p/w500${film.poster_path}" 
                alt="${film.title}"
            >

            <h2>${film.title}</h2>

            <p>${film.overview}</p>

            <p>Ngày phát hành: ${film.release_date}</p>

            <p>⭐ Đánh giá: ${film.vote_average}</p>

            <p>Lượt đánh giá: ${film.vote_count}</p>
        </div>
    `;
    }).join("");
}
