var btn = document.querySelectorAll('button');
for(i=0; i<btn.length;i++){
    btn[i].addEventListener("click",
        function(currentBtnId){        
        var amount1 = Number(document.querySelector('.input1').value);
        var amount2 = Number(document.querySelector('.input2').value);
        var savingBalance = Number(document.querySelector('.balance1').textContent);
        var checkingBalance =Number(document.querySelector('.balance2').textContent);
        currentBtnId =event.target.id;
        switch(currentBtnId){
            case 'btn1': 
                savingBalance -= amount1;
            break;
            case 'btn2':
                savingBalance += amount1;
            break;
            case 'btn3':
                checkingBalance -= amount2;
            break;
            case 'btn4':
                heckingBalance += amount2;
            break;
        }
        document.querySelector('.balance1').textContent =savingBalance.toFixed(2);
        document.querySelector('.balance2').textContent =checkingBalance.toFixed(2);
    })
}
