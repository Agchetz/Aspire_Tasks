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

//asyn await 

async function init(){
    await createPost({title: "post three", body:"this is post three"})
    getPosts();
}
init();

//asyn await with fetch

// async function fetchusers(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');

//     const data = await res.json();

//     console.log(data);
// }

// fetchusers();

var j = [{
    "a" : "tea",
    "b" : 3,

}]
j[1]