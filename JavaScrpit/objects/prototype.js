function User(email,name){
    this.email = email;
    this.name = name;
    this.online = false;
}

User.prototype.login = function(){
    this.online = true;
    console.log(this.name, "logged in");
}

User.prototype.logout = function(){
    this.online = false;
    console.log(this.name, "logged out");
}

const userOne = new User("agchetz@gmail.com","chethan")
const userTwo = new User("chethan@gmail.com","chetz")

console.log(userOne);
userTwo.login();