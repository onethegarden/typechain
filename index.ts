const name = "Nicolas",
  age = 24,
  gender = "male";

const sayHi = (name, age, gender?) => {
  ///?parameter is optional
  console.log(`Hello ${name}, you are ${age}, you are a ${gender}`);
};

sayHi(name, age);
export {};
