
class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    protected displayDetails(): void {
        console.log(`Name : ${this.name}`);
        console.log(`Age : ${this.age}`);
    }
}

class Customer extends Person {
    private code: number;
    private salary: number;
    constructor(code: number, salary: number,
        name: string, age: number) {
        super(name, age);
        this.code = code;
        this.salary = salary;
    }
    displayDetails(): void {
        super.displayDetails();
        console.log(`Code : ${this.code}`);
        console.log(`Salary : ${this.salary}`);
    }
}

var cust1 = new Customer(101, 12000, "King Kochhar", 34);
cust1.displayDetails();
