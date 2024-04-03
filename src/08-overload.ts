function parseStr(input: string | string[]): string | string[] {
  if (Array.isArray(input)) {
    return input.join();
  } else {
    return input.split('');
  }
}

const rtaArray = parseStr('Camilo')
console.log(rtaArray);

const rtaStr = parseStr(['C','a','m', 'i','l','o']);
console.log(rtaStr);
