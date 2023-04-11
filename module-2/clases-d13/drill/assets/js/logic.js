/* Drill S11 */

fetch("https://studio-ghibli-films-api.herokuapp.com/api")

    .then(response => response.json())
    .then(peliculas => {

        var movieArray = []
        for (const key in peliculas) {
            /* document.writeln(`<p>${peliculas[key].title}</p>`) */
            /* dir = {[key]:peliculas[key].title} */

            movieArray.push({ 'image': peliculas[key].poster, 'title': peliculas[key].title, 'romantic': peliculas[key].hepburn, 'release': peliculas[key].release, 'director': peliculas[key].director, 'text': peliculas[key].synopsis })
        }

        $('#button').click(function () {
            var randomKey = movieArray[Math.floor(Math.random() * movieArray.length)];
            $('#img').attr('src', randomKey.image)
            $('#title').text(randomKey.title)
            $('#text').text(randomKey.text)
            $('#titleRom').text(randomKey.romantic)
            $('#release').text(randomKey.release)
            $('#director').text(randomKey.director)
        })

    }).catch(error => {
        console.error(error)
    })





