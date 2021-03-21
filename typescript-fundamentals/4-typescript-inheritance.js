var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.displayDetails = function () {
        console.log("Name : " + this.name);
        console.log("Age : " + this.age);
    };
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(code, salary, name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.code = code;
        _this.salary = salary;
        return _this;
    }
    Customer.prototype.displayDetails = function () {
        _super.prototype.displayDetails.call(this);
        console.log("Code : " + this.code);
        console.log("Salary : " + this.salary);
    };
    return Customer;
}(Person));
var cust1 = new Customer(101, 12000, "King Kochhar", 34);
cust1.displayDetails();
