function bonus(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;
    
    if(salario > 2000){
        bonus = salario * 0.10;
    }

    let salarioFinal = salario - bonus;

    resultado.innerHTML = 
        `Bônus de R$ ${bonus.toFixed(2)} <br>Salário Final R$ ${salarioFinal.toFixed(2)}`;
}

function b(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;
    
    if(salario > 2000){
        bonus = salario * 0.10;
    }

    let salarioFinal = salario - bonus;

    resultado.innerHTML = 
        `Bônus de R$ ${bonus.toFixed(2)} <br>Salário Final R$ ${salarioFinal.toFixed(2)}`;
}

function onus(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;
    
    if(salario > 2000){
        bonus = salario * 0.10;
    }

    let salarioFinal = salario - bonus;

    resultado.innerHTML = 
        `Bônus de R$ ${bonus.toFixed(2)} <br>Salário Final R$ ${salarioFinal.toFixed(2)}`;
}

function bnus(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;
    
    if(salario > 2000){
        bonus = salario * 0.10;
    }

    let salarioFinal = salario - bonus;

    resultado.innerHTML = 
        `Bônus de R$ ${bonus.toFixed(2)} <br>Salário Final R$ ${salarioFinal.toFixed(2)}`;
}

function bons(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;
    
    if(salario > 2000){
        bonus = salario * 0.10;
    }

    let salarioFinal = salario - bonus;

    resultado.innerHTML = 
        `Bônus de R$ ${bonus.toFixed(2)} <br>Salário Final R$ ${salarioFinal.toFixed(2)}`;
}

function bon(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let bonus = 0;
    
    if(salario > 2000){
        bonus = salario * 0.10;
    }

    let salarioFinal = salario + bonus;

    resultado.innerHTML = 
        `Bônus de R$ ${bonus.toFixed(2)} <br>Salário Final R$ ${salarioFinal.toFixed(2)}`;
}


// document.getElementById('salario').addEventListener('keypress',function(event){
//     if(event.key === "Enter"){
//         (bonus());
//     }
// });