console.log("Hello to All");
var x;
x = "Greetings";
console.log(x + " World");
var Employee = /** @class */ (function () {
    function Employee(id, fname, lname) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
    }
    Employee.prototype.print = function () {
        console.log(this.id + " " + this.fname + " " + this.lname);
    };
    return Employee;
}());
var e = new Employee(1, "Mahi", "Sri");
console.log(e);
e.print();
var dept = { did: 22, dname: "HR" };
console.log(dept);
