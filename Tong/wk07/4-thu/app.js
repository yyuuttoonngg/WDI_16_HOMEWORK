// srbOZIQ6Ewvyy6zxWsxCtkeuiOM880A0
// storing API key -- store it on the server not the front end 
// environment key

var offset = 0
var searchWord;

function getSearchWord(){
    searchWord = $('input').val();
    searchGiphy();
}

function searchGiphy(){
    $.ajax({
        method: 'GET',
        url: 'http://api.giphy.com/v1/gifs/search',
        data: {
            q: searchWord,
            offset: offset,
            limit:10,
            api_key: 'srbOZIQ6Ewvyy6zxWsxCtkeuiOM880A0'
        },
        dataType: 'json',
    }).done(onSuccess);
}

function onSuccess(responseData) {
    responseData["data"].forEach( element => {
        var url = element["images"]["fixed_width"]["url"];
        var img = document.createElement('img');
        img.src=url;
        $('.giphies').append(img);
    })
    offset += 10;
}

$(window).scroll(function() {
    if($(window).scrollTop() == $(document).height() - $(window).height()){
        if (offset<30){
            searchGiphy()
        } else {
            $('.end-btn').removeClass('hidden');
            $('.to-top-btn').removeClass('hidden');
        }
    }
})

$('.input-btn').on('click',getSearchWord);
$('.end-btn').on('click',searchGiphy);
$('.to-top-btn').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
})

