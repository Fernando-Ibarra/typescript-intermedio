function parseString(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else {
    return input.split('') // string[]
  }
}

const rtaArray = parseString('Juan');
if (Array.isArray(rtaArray)) {
  rtaArray.reverse();
}
console.log('rtaArray', 'Juan => ', rtaArray );

const rtaString = parseString(['J','u','a','n'])
if (typeof rtaString === 'string') {
  rtaString.toLowerCase();
}
console.log('rtaString', "['J','u','a','n'] => ",rtaString);
