var Supplier = /** @class */ (function () {
    function Supplier() {
    }
    Object.defineProperty(Supplier.prototype, "age", {
        // Getter and Setter for _age 
        get: function () {
            return this._age;
        },
        set: function (age) {
            if (age <= 0 || age >= 200)
                throw new Error('The age is invalid..!!');
            this._age = age;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Supplier.prototype, "name", {
        // Getter and Setter for _name 
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Supplier;
}());
var supplier = new Supplier();
supplier.age = 230;
supplier.name = "King";
console.log("Age : " + supplier.age + " : Name : " + supplier.name);
