
interface IPerson {
    name: string;
    age: number;
    display(): void;
}

interface IEmployee {
    code: number;
    salary: number;
}

class Emp implements IPerson, IEmployee {
    name: string;
    age: number;
    code: number;
    salary: number;
    constructor(name: string, age: number, code: number, salary: number) {
        this.name = name;
        this.age = age;
        this.code = code;
        this.salary = salary;
    }
    display(): void {
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
        console.log(`Code : ${this.code}`);
        console.log(`Salary : ${this.salary}`);
    }
}

var e1 = new Emp("King", 23, 101, 12000);
e1.display();