function reajustar(){
    let preco = Number(document.getElementById('preco').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;
    
    if(preco > 2500){
        desconto = preco * 0.15;
    }else if(preco > 2000){
        desconto = preco * 0.10;
    }else if(preco > 1000){
        desconto = preco * 0.08;
    }

    let precoFinal = preco - desconto;

    resultado.innerHTML = 
        `Desconto de R$ ${desconto.toFixed(2)} <br>Preço Final R$ ${precoFinal.toFixed(2)}`;
}
document.getElementById('preco').addEventListener('keypress',function(event){
    if(event.key === "Enter"){
        reajustar();
    }
});