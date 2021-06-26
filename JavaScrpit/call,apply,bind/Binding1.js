var name1={
    firstName:"sachin",
    lastName:"Tendulkar",
    printFullName:function printName(){
        console.log(this.firstName+" "+this.lastName);
    }
}

var name2={
    firstName:"MS",
    lastName:"Dhoni",
}

name1.printFullName.call(name2)