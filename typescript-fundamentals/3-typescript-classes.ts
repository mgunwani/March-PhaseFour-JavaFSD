
class Employee {
    empCode: number;
    empName: string;
    empAge: number;
    constructor(code: number, name: string, age: number) {
        this.empCode = code;
        this.empName = name;
        this.empAge = age;
    }
    displayDetails(): void {
        console.log(`Employee Code : ${this.empCode}`)
        console.log(`Employee Name : ${this.empName}`)
        console.log(`Employee Age : ${this.empAge}`)
    }
}

var emp1 = new Employee(101, "King", 23);
emp1.displayDetails();
console.log("--------------------------")
var emp2 = new Employee(102, "Kochhar", 30);
emp2.displayDetails();