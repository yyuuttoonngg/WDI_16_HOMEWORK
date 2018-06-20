//The Fortune Teller

var numberOfChildren = Math.floor(Math.random()*4);
var partnersName = (Math.random() + 1).toString(36).substring(7);
var yourLocation = 'Mars';
var jobTitle = 'CEO';
console.log('You will be a '+ jobTitle+ ' in '+ yourLocation +', and married to '+ partnersName+ ' with '+ numberOfChildren+' kids.');

//The Age Calculator
var d = new Date();
var currentYear = d.getFullYear();
console.log(currentYear);
var birthYearString = prompt('Which year were you born?');
var birthYear = Number(birthYearString);
var age1 = currentYear - birthYear;
var age2 = age1 -1;

if (birthYear===currentYear){
    console.log('The age is 0');
} else {
    console.log ('The age is '+age1+' or '+age2);
}

//The Lifetime Supply Calculator
var currenAge = 32;
var maxAge = Math.floor((Math.random()*60 +32));
var leapYear = 0;
if ((maxAge-34)%4===0){
    leapYear++;
};
var numberOfDay = (maxAge-currenAge)*365 + leapYear;
console.log('You will need '+numberOfDay+' to last you until the ripe old age of '+maxAge);

//The even/odd reporter
for(i=0; i<=10; i++){
    if(i%2===0){
        console.log(i+' is odd');
    }else{
        console.log(i+' is even');
    }
}

//Multiplication Table
for(i=1; i<=10; i++){
    for(j=1; j<=10; j++){
    console.log(i+'x'+j +'='+i*j);
    }
}


//to fix
//Your top choices
var favoriteAnimal =['cat','dog','rat','rabbit','fish','chicken'];
for(i=1; i<=favoriteAnimal.length;i++){
    if (i%100===11 ||i%100===12||i%100===13){
        console.log('My '+i+'th choice is '+favoriteAnimal[i-1]);
    } else{
        if (i%10===1){
            console.log('My '+i+'st choice is '+favoriteAnimal[i-1]);
        } else if (i%10===2){
            console.log('My '+i+'nd choice is '+favoriteAnimal[i-1]);
        } else if (i%10===3) {
        console.log('My '+i+'rd choice is '+favoriteAnimal[i-1]);
        } else{
            console.log('My '+i+'th choice is '+favoriteAnimal[i-1]);
        }
    }
}

