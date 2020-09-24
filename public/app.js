
const socket = io()

let name;
let textarea =document.querySelector('#textarea')
let messagArea = document.querySelector('.message__area')

do {
    name = prompt('Please enter your name:   And login with facebook',)
}while(!name) 


textarea.addEventListener('keyup',(e)=>{
  if(e.key === 'Enter'){
      sendMessage(e.target.value)

  }
})





function sendMessage(message){
 let msg = {
     user: name,
     message : message.trim()

 }


// Append 
appendMessage(msg,'outgoing') 

textarea.value =''
scrollbottom()

// Send to server
socket.emit('message',msg )

}





function appendMessage(msg,type){
let mainDiv =document.createElement('div')
let className = type
mainDiv.classList.add(className,'message')

let markup =`
<h4>${msg.user} </h4>
<p>${msg.message}</p>

`
mainDiv.innerHTML= markup
messagArea.appendChild(mainDiv)

}




// Recieve messages
socket.on('message',(msg)=>{
    appendMessage(msg , 'incoming')
    scrollbottom()
})



function scrollbottom(){
    messagArea.scrollTop = messagArea.scrollHeight
}





// facebook login 



   const facebook_login = () => {
 
    
   var provider = new firebase.auth.FacebookAuthProvider();
   firebase.auth().signInWithPopup(provider)
  .then(function(result) {
    var user = result.user;
    console.log("user===>",user)
     window.alert('Welcome Noor butt is here')
    
    })

    .catch(function(error){
      console.log(error.message)
    });
 

}






 // signout 



function signout(){

  firebase.auth().signOut().then(function() {
    // Sign-out successful.
      window.location = "index.html"
  
 }).catch(function(error) {
//   // An error happened.
 });


}




// //firbase connect with app 

 console.log(firebase)






