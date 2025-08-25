//console.log("hola");

const NUMERO = 1;
const TEXTO = "Hola";
const NUMEROGRANDE = 25n;
const BOOLEANO = true;
const INDEFINIDO = undefined;
const NULOS = null;
const NOESUNNUMERO = NaN;
const SIMBOLO = Symbol;

//console.log(typeof NUMERO)
//console.log(typeof TEXTO)
//console.log(typeof NUMEROGRANDE)
//console.log(typeof BOOLEANO)
//console.log(typeof INDEFINIDO)
//console.log(typeof NULOS)
//console.log(typeof NOESUNNUMERO)
//console.log(typeof SIMBOLO)

//const ARREGLO = [];
//const OBJETO = {};

console.log(typeof ARREGLO);
console.log(typeof OBJETO);

const ARREGLO2 = [1,2,3,4,5];

console.log(ARREGLO2);

const OBJETO2 = {Nombre: "Kevin", nota: 7};
console.log(OBJETO2);

console.log(ARREGLO2[6]);
console.log(OBJETO2["nota"]);


if (undefined) { //0, "", undefined, null son siempre falsos
    console.log("Esto es verdadero");

}else{
    console.log("Esto es falso");
}

let sum = 0;
for (let index = 0; index < ARREGLO2.length; index++) {
    const element = ARREGLO2[index];
    sum = element + sum;
    console.log("Elemento: " + element + " Suma a este punto: " + sum);
}

const nota = 1;

console.log(1 + "1"); //transforma los dos a cadena, transforma a string
console.log("Mi nota es " + (nota + 6));

sum = 0;
ARREGLO2.forEach((element) => { //función flecha, solo existe aqui, no se puede reutilizar
    sum = element + sum;
    console.log("Elemento: " + element + " Suma a este punto: " + sum);
});

function miFuncionConParametros(parametro) {
    return "Hola algo que se ejectuta dentro de la función" + parametro;
}

const miFuncionFlecha = (parametro) => {
    return "Hola algo que se ejectuta dentro de la función" + parametro;
};

console.log(typeof miFuncionConParametros);
console.log(typeof miFuncionFlecha); //funcion flecha no tiene this

console.log(miFuncionConParametros("Holi"));