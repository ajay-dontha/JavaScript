function onAdd(){

    var firstNumber=document.getElementById('firstNumber').value;

    var secondNumber=document.getElementById('secondNumber').value;

    var result=Number(firstNumber)+Number(secondNumber);

    console.log("Result:"+result);

    document.getElementById('result').innerHTML=result;
}

function onSub(){

    var firstNumber=document.getElementById('firstNumber').value;

    var secondNumber=document.getElementById('secondNumber').value;

    var result=Number(firstNumber)-Number(secondNumber);

    console.log("Result:"+result);

    document.getElementById('result').innerHTML=result;
}


function onMul(){

    var firstNumber=document.getElementById('firstNumber').value;

    var secondNumber=document.getElementById('secondNumber').value;

    var result=Number(firstNumber)*Number(secondNumber);

    console.log("Result:"+result);

    document.getElementById('result').innerHTML=result;
}

function onDiv(){

    var firstNumber=document.getElementById('firstNumber').value;

    var secondNumber=document.getElementById('secondNumber').value;

    var result=Number(firstNumber)/Number(secondNumber);

    console.log("Result:"+result);

    document.getElementById('result').innerHTML=result;
}

    