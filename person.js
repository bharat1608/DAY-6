class Person {
    constructor(name, age, gender, occupation) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
    }

   
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}, Occupation: ${this.occupation}`;
    }

   
    greet() {
        return `Hello, my name is ${this.name}!`;
    }
}


const person1 = new Person("bharath", 30, "male", "Software Engineer");
console.log(person1.getDetails()); 
console.log(person1.greet()); 

const person2 = new Person("Babu", 35, "Male", "Doctor");
console.log(person2.getDetails()); 
console.log(person2.greet()); 