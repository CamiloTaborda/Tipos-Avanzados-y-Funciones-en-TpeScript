const prices: ( number | string )[] = [1,2,3,4, 'Hola'];
prices.push(5);
prices.push('Mundo');

let user: [string, number, boolean];
user = ['Juan', 20, true];
const [username, age] = user;
console.log(username);
console.log(age);

