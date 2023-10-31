
console.log('-------------------------------');
console.log('EXPERIMENTANDO CON TYPESCRIPT:');

let valorNumerico: number;

valorNumerico = 5;

// valorNumerico = '5'; // error: Type 'string' is not assignable to type 'number'.

console.log('Valor numerico = ', valorNumerico);


function suma(...numeros: number[]): number {
  return numeros.reduce((acc, curr) => acc + curr, 0);
}


let resultadoSuma = suma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// resultadoSuma = suma(1, 2, false, 4, 5); // error: Argument of type 'boolean' is not assignable to parameter of type 'number'.

console.log('Resultado de suma con REST = ', resultadoSuma);


type Operador = 'Sumar' | 'Sumar2' | 'Restar' | 'Multiplicar' | 'Dividir';

function calcular(operando1: number, operando2: number, operador: Operador): number {
  switch (operador) {
    case 'Sumar':
      return operando1 + operando2;

    case 'Restar':
      return operando1 - operando2;

    case 'Multiplicar':
      return operando1 + operando2;

    case 'Dividir':
      if(operando2 === 0) {
        throw new Error("No es posible la divicion entre 0");
      }

      return operando1 / operando2;

    default:
      throw new Error(`¡El Operador '${operador}' no ha sido implementado!`);
  }
}

let resultadoCalcular = calcular(10, 5, 'Sumar');

// resultadoCalcular = calcular(10, 0, 'Dividir'); // Error: division dentre 0.

// resultadoCalcular = calcular(4, 0, 'Sumar2'); // Operador valido pero no implmentado.

console.log('Resultado de operación = ', resultadoCalcular);

console.log('-------------------------------');
