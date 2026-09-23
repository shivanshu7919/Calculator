var expression="";

var input=document.querySelector(".input-box");

function getExpression(num){
    expression+=num;
    input.value=expression;
}

function calculate(){
    input.value=eval(expression);
    expression='';
}

function deleteExpression(){
    expression=expression.slice(0,-1);
    input.value=expression;
}

function clearInput(){
    input.value='';
    expression='';
}