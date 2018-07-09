console.log('online-bank');
var btn = document.querySelectorAll('button');
console.log(btn.length);
// var parent = btn[1].parentNode.parentNode;
// console.log(parent.querySelector('span').innerHTML);
i=0;
while(i<btn. length){
    btn[i].addEventListener('click',doMath);
    var currentButtonID =btn[i].id;
    console.log(currentButtonID);
    var parent = btn[i].parentNode.parentNode;
    var currentBalance =Number(parent.querySelector('span').innerHTML);
    console.log(parent);
    // console.log(parent.querySelector('span'));
    console.log();
    // console.log(currentBalance);
    // console.log(parent.querySelector('input').value);
    i++
} 
 
function doMath(){
    getvalue();
   console.log('hi')
}

function getvalue(){
   var currentvalue = parent.querySelector('input').value;
   console.log(currentvalue)
}
// console.log(parent.query('p'));

// btn.forEach(function(i){
//     addEventListener("click",doMath)

// });
// function doMath(){
//     var buttonClicked = window.event.target.id
//     console.log(buttonClicked);
//     var a ='.'+ buttonClicked;
//     console.log(a);
//     var amount = document.querySelector(p[class*=a]).value;
//     console.log(amount);
// //     var balance =
// // }
// // document.querySelector('.savings-withdraw-btn').addEventListener("click",
// function(){
//     var input =  document.querySelector('.savings-sec input').value;
//     console.log(input);
//     savingBalance -= Number(input);
//     console.log(savingBalance);

// }
// );


// var btn = document.querySelectorAll('button');
// for (var i=0; i<btn.length; i++){

//     btn[i].addEventListener('click',
//     function(i){
//         var saving = Number(document.querySelector('.saving-input').value);
//         var checking = Number(document.querySelector('.checking-input').value);
//         console.log(saving);
//         console.log(checking);
//         var savingBalance=0;
//         var checkingBalance=0;

//        if(i=0){savingBalance -= saving;}
//         if (i=1){savingBalance += saving;}
//        if(i=2){checkingBalance -= checking;}
//         if(i=3){checkingBalance += checking;}
      
//         document.querySelector('.balance-saving').textContent = savingBalance;
//         document.querySelector('.balance-checking').textContent = checkingBalance;  
//     })
  
// }

