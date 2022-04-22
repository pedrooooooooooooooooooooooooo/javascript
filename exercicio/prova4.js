function clicar(){
    var a=parseInt(prompt("Insira o um valor"));
           
    
    suc=a+1;
    ant=a-1
    document.getElementById("questão").innerHTML=`<p> Olá ${nome} O número é ${a}, e o sucessor do números é ${suc} e antecessor é ${ant}`;
    
    
    
    }