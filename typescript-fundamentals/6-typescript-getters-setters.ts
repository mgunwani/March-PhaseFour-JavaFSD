
class Supplier {
    private _age: number;
    private _name: string;
    // Getter and Setter for _age 
    public get age() {
        return this._age;
    }
    public set age(age: number) {
        if (age <= 0 || age >= 200)
            throw new Error('The age is invalid..!!');
        this._age = age;
    }
    // Getter and Setter for _name 
    public get name() {
        return this._name;
    }
    public set name(name: string) {
        this._name = name;
    }
}

var supplier = new Supplier();
supplier.age = 230;
supplier.name = "King";
console.log(`Age : ${supplier.age} : Name : ${supplier.name}`);