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

printFullName.call(name2);
printFullName.call(name1);