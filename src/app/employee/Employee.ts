export class Employee{
    id:Number;
    fname:String;
    lname:String;
    name: String;
    salary: Number; 

constructor(id:Number,fname:String,lname:String,name:String,salary:Number){
    this.id = id;
    this.fname = fname;
    this.lname = lname;
    this.name = name;
    this.salary = salary;
}
    print(){
        console.log(this.id+" "+this.fname+" "+this.lname);
    }
    
}