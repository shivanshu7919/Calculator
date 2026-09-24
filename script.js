var expression="";

var input=document.querySelector(".input-box");

function getExpression(num){
    expression+=num;
    input.value=expression;
}

function calculate(){
    if(expression){
        input.value=eval(expression);
        expression=input.value;
    } 
}

function backspace(){
    expression=expression.slice(0,-1);
    input.value=expression;
}

function clearInput(){
    input.value='';
    expression='';
}