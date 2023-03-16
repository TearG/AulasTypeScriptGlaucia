//=> Variáveis
let nome: string = 'Vanessa Faria' 
console.log(nome);

//=> Arrays 
let animais: string[] = ['Elefante', 'cachorro', 'Gato', 'Panda', 'Girafa' ];
console.log(animais);

//=> Objetos 
let carro: {
  nome: string,
  ano: number,
  preco: number
};

carro = { nome: 'Toyota Yaris Sedan XS' , ano: 2019, preco: 80.000 }
console.log(carro);

//=> Functions 
function multiplicarNumeros(num1: number, num2: number){
  return num1 * num2;
}

console.log(multiplicarNumeros(2,5));
