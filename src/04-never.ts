const withoutEnd = () => {
  while (true) {
    console.log('nunca pares de aprender');
  }
}

const fail = (mesage: string) => {
   throw new Error(mesage)
}

const example = (input: unknown) => {
   if (typeof input === 'string') {
    return 'es un string';
   } else if (Array.isArray(input)){
     return 'es un array';
   }
   return fail('not match');
}

console.log(example('Hola'));
console.log(example([1,2,3,4,]));
console.log(example(1234));
console.log(example('Hola despues de fail'));




