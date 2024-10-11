console.log(2 + 2)
console.log("1" + 1)

let resultado;
let preco = 30

if ( preco < 40 ) {
resultado = "Livro barato!" ;
}else{
resultado = "Livro não é barato" ;
}

let resutado = (preco < 40) ? ("Livro barato!"): ("Livro não barato!");


const meuArray = [1,2,3];

const meuObjeto = {
  texto : "Uma propriedade",
  numero : 34
};

let minha_var = "endereco";

function soma(a, b){
  return a + b ;
}

const anonima = function (a, b){
  return a + b;
}

const arrow = (a, b) => {
  return a + b;
}

const arrow2 = (a,b) => a + b;

const arrow3 = a => a + 2

const dobro = elemento => {console.log(elemento * 2)}