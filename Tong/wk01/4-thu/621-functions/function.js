//function homework https://gist.github.com/epoch/fd1060cc1ca3502fab1c#file-week1-js-functions2-js
//1 Build your own concatenation
function combineWords(word1, word2){
    return (word1+word2);
}
console.log(combineWords('hello',' world'));

//2 calculate age
function calculateAge(birthYear, currentYear){
    if (birthYear ===currentYear){
        return ('You are 0');
    } else if (birthYear > currentYear){
        return ('Whoops, I think you entered the wrong year!')
    } else {
        var age = currentYear - birthYear;
        return ('You are either ' + age + ' or '+ (age-1));
    }
}
console.log(calculateAge(1980,2019));
console.log(calculateAge(2019,2019));
console.log(calculateAge(2019,1980));


//3 length of string
var stringArray = ['head','crazy', 'guy','the', 'pig'];
function lengths(arrayName){
    var lengthsArray = [];
    for (i=0; i<arrayName.length; i++){
        lengthsArray.push(arrayName[i].length); 
    }
    return lengthsArray;
}
console.log(lengths(stringArray));

//4 transmogrifier
function transmogrifier(a,b,c){
    return Math.pow(a*b,c);
}
console.log(transmogrifier(2,3,4));

//5 wordReverse
function wordReverse(inputString){
    wordsInString = inputString.split(' ');
    return wordsInString.reverse();
  
}
console.log(wordReverse("this is a cool string!"));