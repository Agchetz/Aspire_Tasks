var name1 = {
    firstName:"sachin",
    lastName:"Tendulkar",
}

function printFullName(){
    console.log(this.firstName+" "+this.lastName);
}

var name2={
    firstName:"MS",
    lastName:"Dhoni",
}

var printMyName = printFullName.bind(name1);
console.log(printMyName());