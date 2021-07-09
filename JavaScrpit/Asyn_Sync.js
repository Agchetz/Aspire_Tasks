let a=1;
let b=2;

setTimeout(function(){
console.log('async')
},300)

console.log('sync');

console.log(a);
console.log(b);