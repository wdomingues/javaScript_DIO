function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Valeu pela curtida!</b>";
    console.log(document.getElementById("agradecimento"));
}
function redirecionar(){
    window.open("https://facebook.com/winnedomingues"); //abre em outra aba
    window.location.href = "https://github.com/wdomingues"; //abre na mesma aba
}
function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Mouse passou pelo texto!";
    elemento.innerHTML = "Mouse passou pelo texto!";
    //alert("Trocar Texto");
}
function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}
function carregar(){
    alert("Página Carregada");
}
function mudar(elemento) {
    console.log(elemento.value);
}

/* 2.1.
function soma(n1, n2){
    return n1+n2;
}

function stringReplace(frase, palavra, novaPalavra){
    return frase.replace(palavra, novaPalavra);
}

function validaIdade(idade){
    if (idade>=18){
        return true;
    } else{
        return false;
    }
}

alert(soma(7,14));
var texto = "Gil Brother, o Away de Teresópolis.";
alert(texto.replace("Teresópolis", "Petrópolis"));

var idade = prompt("Qual é a sua idade?");
alert(validaIdade(idade));

/* 1.3
//PARTE2

var d = new Date();
var mes = d.getMonth()+1; // começa em 0
var tamMes;
var ano = d.getYear()+1900; //começa em 1900. Mostra a diferença

if (mes == 2) {
    if ((ano % 400) == 0){
        tamMes = 29;
    } else if ((ano % 4) == 0){
        if ((ano % 100) != 0) {
            tamMes = 29;
        } else{
            tamMes = 28;
        }
    } else {
        tamMes = 28;
    }
} else if ((mes == 4) || (mes == 6) || (mes == 9) || (mes == 11)) {
    tamMes = 30;
} else{
    tamMes = 31;
}

alert("Dia: " + (tamMes-d.getDay())); //conta invertido: Quantos faltam para o fim
alert("Mês: " + mes);
alert("Ano: " + ano);
alert(d.getHours()+ "h" + d.getMinutes()+ "min" + d.getSeconds()+ "s" );

console.log(d);

//PARTE 1

var count = 0;
while(count <= 5){
    console.log(count);
    alert(count);
    count++;
}

//PARTE 0

var idade = prompt("Qual é a sua idade?");
if (idade >= 18){
    alert("Maior de Idade");
} else{
    alert("MENOR de Idade");
}
*/

/*
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
*/

//var idade1 = 2012-2005
//var idade2 = 2020-2012
//var frase = "A " + nome + " está há " + (idade1+idade2)+ " anos no mercado oferecendo o que há de melhor em tecnologia."
//alert(frase.replace("oferecendo", "fornecendo"));

//console.log(nome);
//console.log(idade1);
//console.log(frase);
