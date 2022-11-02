export function parseString(input: string): string[]
export function parseString(input: string[]): string
export function parseString(input: number): boolean

export function parseString(input: unknown): unknown {
  if (Array.isArray(input)) {
    return input.join(''); // string
  } else if (typeof input === 'string') {
    return input.split('') // string[]
  } else if (typeof input === 'number') {
    return true // boolean
  }
}

const rtaArray = parseString('Juan');
rtaArray.reverse()
console.log('rtaArray', `Juan => ${rtaArray}` );

const rtaString = parseString(['J','u','a','n'])
rtaString.toLowerCase();
console.log('rtaString', `['J','u','a','n'] => ${rtaString}`);

const rtaBoolean = parseString(12)
console.log('rtaBoolean', `12 => ${rtaBoolean}`);
