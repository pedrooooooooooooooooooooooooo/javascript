function clicar(){
var a=parseInt(prompt("Insira um número: "));
var b=parseInt(prompt("Insira outro número: "));
soma=a+b;
sub=a-b;
multi=a*b;
div=a/b;
potenciação=a**b;
divinteiro=a%b;



document.getElementById("questão").innerHTML=`Os números escolhidos foram ${a} e ${b}`;
document.getElementById("questão1").innerHTML=`A soma foi: ${soma}`;
document.getElementById("questão2").innerHTML=` A multiplicação foi: ${multi}`;
document.getElementById("questão3").innerHTML=` A subtração foi: ${sub}`;
document.getElementById("questão4").innerHTML= `A divisaõ foi: ${div} `;
document.getElementById("questão5").innerHTML=`A potenciação foi: ${potenciação}`;
document.getElementById("questão6").innerHTML=`A divisão por inteiro foi: ${divinteiro}`;
}