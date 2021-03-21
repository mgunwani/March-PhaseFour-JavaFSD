/**
 * String
 * Boolean
 * Array
 * Tuple
 * Enum
 * Union
 * Any
 * Void
 */

/* String Data Type */

// var fname: String = "King";
// var lname: String = 'Kochhar';
// console.log("First Name : " + fname);
// console.log("Last Name : " + lname);
// console.log(`Welcome ${fname} ${lname}`);   // Template String

/* Boolean Data Type */

// var isValid: boolean = true;
// console.log(isValid);
// console.log(isValid ? "Hi" : "Bye");

/* Array Data Type */

// var names: string[] = ["King", "Kochhar", "Sarah"];
// console.log(names);
// var namesList: Array<string> = ["King", "Kochhar", "Sarah"];
// console.log(namesList);
// var nameList: (string | number)[] = ["King", "Kochhar", "Sarah", 101, 200];
// console.log(nameList);
// console.log("------------------")
// for (let index = 0; index < namesList.length; index++)
//     console.log(namesList[index])
// console.log("------------------")
// for (let n of namesList)
//     console.log(n);
// console.log("------------------")
// namesList.forEach(n => { console.log(n) });

/* Tuple Data Type */

// var employee: [number, string] = [101, "Jacob"];
// console.log(employee);
// console.log("------------------");
// // var person: [number, string, number, boolean] = [101, "King", 23, true];
// var person: [number, string, number, boolean];
// person = [101, "King", 23, true];
// console.log(person);
// console.log("------------------");
// var emps: [number, string][];
// emps = [[101, "King"], [102, "Kochhar"], [103, "Shreya"]];
// console.log(emps);
// console.log("------------------");

/* Union Data Type */

// var empCode: (number | string);
// empCode = 101;
// console.log(empCode);
// empCode = "E001";
// console.log(empCode);

/* Any Data Type */
var value: any = "Hello World";
value = 123;
console.log(value);



