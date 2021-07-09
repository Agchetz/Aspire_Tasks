const posts = [
    { title: "post one", body:"This is post one"},
    { title: "post two", body:"This is post two"}
];

function getPosts(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post, index) =>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML= output;
    },1000);
}

function createPost(post){
    return new Promise((resolve,reject) =>{
    setTimeout(() =>{
        posts.push(post)

        const err = false;

        if(!err){
            resolve();
        }else{
            reject('error something went wrong');
        }
    },2000)  
    });
}

createPost({title: "post three", body:"this is post three"})
.then(getPosts)
.catch(err => console.log(err));

//promise.all

// const promise1 =Promise.resolve("hai chethan");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
// setTimeout(resolve,2000, 'goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
// .then(get => get.json())

// Promise.all([promise1, promise2, promise3, promise4])
// .then(values =>console.log(values));
