fetch("https://swapi.dev/api/people/1/")
    .then((result) => console.log(result))
    .then(function (result) {
        result = JSON.parse(result);
        console.log(result.films[0]);
        fetch(result.films[0]);
    })
    .then((result) => console.log(result));
