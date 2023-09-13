document.getElementById('fetchButton').addEventListener('click', function () {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNTI5YjRjYjgzN2VmMzI3ZjM3ZDljODFhMWY1YmJmNSIsInN1YiI6IjY1MDE4NjZjNmEyMjI3MDExYTdiMzhmZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Zjw4IubMn1_IFnl4AsxZT0lPL87TpSp7f3jNv1m5FtA'
        }
    };

    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
        .then(response => response.json())
        .then(response => {
            const container = document.getElementById('list');

            response.results.forEach(movie => {
                const card = document.createElement('div');
                card.className = 'card col-md-4 bg-secondary';
                card.style = 'width: 15rem; height: 30rem; padding: 0;';

                const image = document.createElement('img');
                image.className = 'card-img-top';
                image.src = 'https://image.tmdb.org/t/p/w500' + movie.poster_path;
                image.alt = movie.title;

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body';
                cardBody.style = 'padding: 10px;';

                const title = document.createElement('h6');
                const maxTitleLength = 19;
                const trimTitle = movie.title.length > maxTitleLength ? 
                    movie.title.substring(0, maxTitleLength) + '...' : movie.title;
                title.className = 'card-title text-light';
                title.textContent = trimTitle;

                const description = document.createElement('p');
                description.className = 'card-text text-white';
                const maxLength = 80;
                const truncatedText = movie.overview.length > maxLength ? 
                    movie.overview.substring(0, maxLength) + '...' : movie.overview;
                description.textContent = truncatedText;

                cardBody.appendChild(title);
                cardBody.appendChild(description);

                card.appendChild(image);
                card.appendChild(cardBody);

                container.appendChild(card);
            });
        })
        .catch(err => console.error(err));
});