let opertaor = '';
let equationValue = '';
let resultValue = '';

document.addEventListener("DOMContentLoaded", function(){
    //store all the components on Html in JS
    let clear = document.querySelector("#clear-btn");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let operators = document.querySelectorAll(".operator");
    let numbers = document.querySelectorAll(".number");

    let equationScreen = document.querySelector(".equation");
    let resultScreen = document.querySelector(".result");

    numbers.forEach((number) => number.addEventListener("click", function(e){
        handleNumber(e.target.textContent)
        resultScreen.textContent = resultValue;
    }))

    operators.forEach((op) => op.addEventListener("click", function(e){
        handleOperator(e.target.textContent)
        equationScreen.textContent = equationValue + " " + operator;
        resultScreen.textContent = resultValue; 
    }))

    clear.addEventListener("click", function(){
        equationValue = '';
        resultValue = '';
        operators = '';
        equationScreen.textContent = resultValue;
        resultScreen.textContent = resultValue;
    })

    equal.addEventListener("click", function(){
        if(resultValue != '' && equationValue != ''){
            calculate()
            equationScreen.textContent = '';
            if(equationValue.lelngth <= 6){
                resultScreen.textContent = equationValue;
            }else{
                resultScreen.textContent = equationValue.slice(0,6);
            }
        }
    })

    decimal.addEventListener("click", function(){
        addDecimal();
    })

})

function handleNumber(num){
    if(resultValue.length <= 7){
    resultValue += num;
    }
}

function handleOperator(op){
    operator = op;
    equationValue = resultValue;
    resultValue = '';
}

function calculate(){
    equationValue = Number(equationValue);
    resultValue = Number(resultValue);

    if(operator ==="+"){
        equationValue += resultValue;
        }else if(operator === "-"){
            equationValue -= resultValue;
        }else if(operator === "x"){
            equationValue *= resultValue;
        }else{
            equationValue /= resultValue;
        }
        equationValue = roundNumber(equationValue);
        equationValue = equationValue.toString();
        resultValue = equationValue.toString();
            
        
}

function roundNumber(num){
    return Math.round(num*1000)/1000;
}

function addDecimal(){
    if(!resultValue.includes(".")){
        resultValue += '.';
    }
}