// https://gist.github.com/epoch/c173a5b0c545babd3c40da93e150303a
console.log('movie ajax');
document.querySelector('.input-btn').addEventListener('click',function(){
    var searchTitle = document.querySelector('input').value;
    console.log(searchTitle);
    $.ajax({
        // What kind of request
        method: 'GET',
        // The URL for the request
        url: 'https://omdbapi.com/?s=' + searchTitle + '&apikey=2f6435d9',
        // The type of data we want back
        dataType: 'json',
        // Code to run if the request succeeds; the JSON
        // response is passed to the function as an argument.
    }).done(onSuccess);
})

function onSuccess(responseData) {
    console.log(responseData);
    responseData["Search"].forEach(movie => {
        var newA = document.createElement("a");
        var newLi = document.createElement("li");
        newA.textContent = movie["Title"];
        newA.href = "https://www.imdb.com/title/" + movie["imdbID"] + "/"
        newA.target = "_blank"
        newLi.appendChild(newA)
        document.querySelector('.titles').appendChild(newLi);
    });
};

// function onSuccess(responseData) {
//     console.log(responseData);
//     responseData["Search"].forEach(movie => {
//         var newP = document.createElement("P");
//         content = movie["Title"];
//         var imdbUrl = "https://www.imdb.com/title/" + movie["imdbID"]
//         newP.innerHTML = '<a target="_blank" href='+ imdbUrl +'>'+ content +'</a>'
//         document.querySelector('.titles').appendChild(newP);
//     });
// };




