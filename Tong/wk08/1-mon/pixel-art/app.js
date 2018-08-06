var userColor;

(function getColor(){
    $('.color-btn').on('click',function(e){
        e.preventDefault();
        userColor = $('.input-box').val();
        console.log(userColor);
    })
    $('form').on('keydown', '.input-box', function (e) {
        var key = e.which;
        switch (key) {
        case 13: 
        e.preventDefault();
            userColor = $('.input-box').val();
            console.log(userColor);
        }
    })
})();


for(var i=0; i<1000; i ++){
    $('<div/>',{ class : 'square'}).appendTo('.canvas');
    $('.square').on('click',changeColor);
}

function changeColor(){
    $(this).css("background-color",userColor);
}




