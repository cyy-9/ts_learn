interface Person {
  name: string;
  age?: number,
  [propsname: string]: any;
}

let tom: Person = {
  name: 'tom',
  age: 20,
  sex: 1,
}

let foo: (a: number, b: number) => number = function(a, b) {
  return a + b;
}

let tuple: [string, number];
tuple = ['hello', 22];
tuple.push('123');
tuple.push(123);