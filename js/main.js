/*
//alert e console-debug
var name = "Felipe";
var idade = 21;
alert("Bem vindo: " + name + " Idade: " + idade);
console.log(name);

//lista 
var lista = ["item 1", "item 2", "item 3"];
console.log(lista[1]);
lista.push("item 4"); //add 
lista.pop() // remove last element 
console.log(lista);
console.log(lista.join(",")); // replace "" -> ,

//dicionario 
var fruta = {nome: "Maçã", cor: "Vermelha"}
var frutas = [{nome: "Maçã", cor: "Vermelha"} , {nome: "Laranja", cor: "Laranja"}]
console.log(fruta.nome);
console.log(frutas[1].nome);

//condicionais
var idade = prompt("Qual sua idade?");
if(idade < 10){
    console.log("idade insuficente");
}
else{
    console.log("idade suficiente");
}

// laços 
var count = 0;
while(count < 5){
    console.log(count);
    count++;
}
for(count = 0; count < 5; count++){
    console.log(count);
}

//datas

var d = new Date;
alert(d.getMonth()+1);
//d.getHours, d.getMinutes, d.getMilliseconds ...
*/

function soma(n1, n2){
    return n1 + n2;
}

//alert(soma(5,10));

function botao(){
    //alert("Clicou");
    document.getElementById("Agradecimento").innerHTML = "<b>Você clicou</b>";
    redirecionar();
}

function redirecionar(){
    window.open("https://www.google.com");
    //or open in same page    
    //window.location.href = "https://www.google.com/";
}

function trocar(){
    alert("Trocar texto");
}
