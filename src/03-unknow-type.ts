let unknowVar: unknown;


// verificar el tipo de dato
if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

if (typeof unknowVar === 'boolean') {
  let isNew: boolean = unknowVar;
  console.log(isNew);

}

const parse = (str: string): unknown => {
  return JSON.parse(str)
}
