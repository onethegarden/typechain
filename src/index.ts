class Human {
  public name: string;
  public age: number;
  public gender: string;
  constructor(name: string, age: number, gender?: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const lynn = new Human("Lynn", 18, "female");

const person = {
  name: "nicolas",
  age: 22,
  gender: "male",
};

const sayHi = (person: Human): string => {
  ///?parameter is optional
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}!`;
};

console.log(sayHi(person));
export {};
