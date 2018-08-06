var userColor;

(function getColor(){
    $('.color-btn').on('click',function(e){
        e.preventDefault();
        userColor = $('.color-input').val();
        console.log(userColor);
    })
    $('form').on('keydown', '.color-input', function (e) {
        var key = e.which;
        switch (key) {
        case 13: 
        e.preventDefault();
            userColor = $('.color-input').val();
            console.log(userColor);
        }
    })
})();

for(var i=0; i<1350; i ++){
    $('<div/>',{ class : 'square'}).appendTo('.canvas');
    $('.square').on('mouseover',changeColor);
}

function changeColor(){
    $(this).css("background-color",userColor);
}



document.querySelector('.movie-btn').addEventListener('click',function(e){
    e.preventDefault();
    var searchTitle = document.querySelector('.movie-input').value;
    console.log(searchTitle);
    $.ajax({
        method: 'GET',
        url: 'https://omdbapi.com/?t=' + searchTitle + '&apikey=2f6435d9',
        dataType: 'json',
    }).done(onSuccess);
})

function onSuccess(responseData) {
    var imageUrl =responseData["Poster"];
    console.log(imageUrl);
    $('.canvas').css('background-image','url('+imageUrl+')');
}