// https://github.com/kasun-maldeni/wdi_city_pix
console.log("citypix");
var cities =['NYC', 'SF', 'LA', 'SYD', 'ATX'];
var selectBox = document.getElementById("city-type");


cities.forEach(city =>{
    var option = document.createElement("option");
    option.text = city;
    selectBox.add(option);
})
selectBox.addEventListener('change',function(event){
    var cityName = event.target.value.toLowerCase();
    var cityClass
    if (cityName ==='syd'){
        cityClass = 'sydney'
    } else if (cityName==='atx'){
        cityClass = 'austin';
    } else {
        cityClass = cityName;
    }
    document.querySelector("body").className = cityClass;
})

// selectBox.addEventListener('change',function(event){
//     var cityName = event.target.value.toLowerCase();
//     if (cityName ==='syd'){
//         url = "./images/sydney.jpg";
//     } else if (cityName==='atx') {
//         url = "./images/austin.jpg";
//     } else {
//        var url = "./images/" + cityName + ".jpg";
//     }
//     console.log(cityName);
//     document.querySelector("body").style.backgroundImage = "url('"+url +"')";
// })


