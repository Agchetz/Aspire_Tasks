 const name = document.getElementById('nname') 
 const password = document.getElementById('password')
 const form = document.getElementById('form')
 const errorElement = document.getElementById('error')

 form.addEventListener( 'submit' , (e) => {
    let messages = []
    if(nname.value == '' || nname.value == null){
    messages.push('Name is required')
 }

    if(messages.length > 0){
    e.preventDefault()
    errorElement.innerText = messages.join(', ')
    }
 })