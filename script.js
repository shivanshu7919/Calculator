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
        let buttonText=event.target.textContent;
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
            if(buttonText==='x'){
                buttonText='*';
            }
            expression+=buttonText;
            input.value=expression;
        }
    });
});

document.addEventListener('keydown',(event)=>{
    if(event.key>='0' && event.key<='9'){
        expression+=event.key;
        input.value=expression;
    }
    else if(event.key=='+' || event.key=='-' || event.key=='*' || event.key=='\\' || event.key=='%' || event.key=='.'){
        expression+=event.key;
        input.value=expression;     
    }
    else if(event.key=='Enter'){
        calculate();
    }
    else if(event.key=='Backspace'){
        backspace();
    }
    
});
