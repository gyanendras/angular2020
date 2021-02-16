console.log("Hello to All");
var x:String;
x = "Greetings"
console.log(x+" World");
class Employee{
id:Number;
fname:String;
lname:String;
constructor(id:Number,fname:String,lname:String){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
}
    print(){
        console.log(this.id+" "+this.fname+" "+this.lname);
    }
    
}

var e:Employee = new Employee(1,"Mahi","Sri");
console.log(e);
e.print();

interface Department{
    did:Number;
    dname:String;

}

var dept:Department = {did:22,dname:"HR"};
console.log(dept);






