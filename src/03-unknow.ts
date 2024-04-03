let anyVar : any;
anyVar = null;
anyVar = undefined;
anyVar = true;
anyVar = '';
anyVar = 2;

let isNew: boolean = anyVar;

anyVar.doSomenthing();

let unknowVar : unknown;
unknowVar = null;
unknowVar = undefined;
unknowVar = true;
unknowVar = '';
unknowVar = 2;

if (typeof unknowVar === 'string') {
  unknowVar.toUpperCase();
}

const parse = (str: string): unknown => {
  return JSON.parse(str);
}
