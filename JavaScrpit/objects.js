//object

function name(name){
    const objj = {}
    objj.name=name;
    objj.greeting=function(){
    console.log(`${objj.name}`+' welcome');}
    return objj;
    }
    raaja= name('raja')
    const raaja= name('raja')
    undefined
    raaja.name
    raaja.greeting()

//using constructor

function Person(name) {
    this.name = name;
    this.greeting = function() {
      alert('Hi! I\'m ' + this.name + '.');
    };
      }
    let person1 = new Person('Bob');
    let person2 = new Person('Sarah');
    person1.name
    person1.greeting()
    person2.name
    person2.greeting()

    //Fcatory function

    function createCircle(radius){
        return{
            radius , //radius:'radius' when key and value are same you can use onlyone word
            draw: function(){
                console.log('draw');
            }
        };
    }
    const circle = createCircle(1);
    circle.draw()

    //Constructor function

    function Circle(radius){
        this.radius = radius;
        this.draw = function(){
            console.log('draw')
        }                           //return this; happens automatically
    }
    const another = new Circle(1);