const withoutEnd = () => {
  while (true) {
    console.log('No paro');

  }
}

const fail = (message: string) => {
  throw new Error(message)
}

const example = (input:unknown) => {
  if (typeof input === 'string') {
    return 'Es un string'
  } else if (Array.isArray(input)) {
    return 'Es una array'
  }
  return fail('Ninguno concuerda')
}

console.log(example('Hola'));
console.log(example([1,2,3,4]));
console.log(example(12435));
console.log(example('Hola'));
