const sayHi = (name: string, age: number, gender: string): string => {
  ///?parameter is optional
  return `Hello ${name}, you are ${age}, you are a ${gender}!`;
};

console.log(sayHi("Nicolas", 444, "male"));
export {};
