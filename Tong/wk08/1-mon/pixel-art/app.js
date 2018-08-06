for(var i=0; i<1000; i ++){
    $('<div/>',{ class : 'square'}).appendTo('.canvas');
}

$('.color-btn').on('click',function(e){
    e.preventDefault();
    var userColor = $('.input-box').val();
    console.log(userColor);
})

$('form').on('keydown', '.input-box', function (e) {
    var key = e.which;
    switch (key) {
    case 13: // enter
    e.preventDefault();
        var userColor = $('.input-box').val();
        console.log(userColor);
    }
});
$('.square').each(function(){
    $(this).on("click",function(){
        $(this).toggleClass('green');
    })
})


