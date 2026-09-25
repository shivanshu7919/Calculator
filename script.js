let expression="";

let input=document.querySelector(".input-box");
let buttons=document.querySelectorAll(".keyboardButtons");

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

buttons.forEach(button => {
    button.addEventListener('click',(event)=>{
        const buttonText=event.target.textContent;
        if(buttonText==='='){
            calculate();
        }
        else if(buttonText==='Del'){
            backspace();
        }
        else if(buttonText==='AC'){
            clearInput();
        }
        else{
            expression+=buttonText;
            input.value=expression;
        }
    });
});


