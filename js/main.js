
var frutas = [{nome: "jaca", cor: "VERDE"},
                {nome: "cajá", cor: "amarelo"}];
console.log(frutas);
alert(frutas[1].nome + " " + frutas[0].cor.toLowerCase() +"?");

var fruta = {nome: "maçã", cor: "vermelha"}
console.log(fruta.nome.toUpperCase()) //MAIÚSCULAS
alert(fruta.cor)

var lista = ["maçã", "pêra", "laranja"];
lista.push("uva")
lista.reverse();
lista.pop();

console.log(lista);
console.log(lista.toString());
console.log(lista.join(" - "));


//var idade1 = 2012-2005
//var idade2 = 2020-2012
//var frase = "A " + nome + " está há " + (idade1+idade2)+ " anos no mercado oferecendo o que há de melhor em tecnologia."
//alert(frase.replace("oferecendo", "fornecendo"));

//console.log(nome);
//console.log(idade1);
//console.log(frase);
