const socket= io('http://localhost:8000');

const form = document.getElementById('send-container');
const messageInput= document.getElementById('messageInp');
const messageContainer = document.querySelector('.container');

var audio=new Audio('ting.mp3');

const append= (message,position) =>{
    const messageElement=document.createElement('div');
    messageElement.innerText=message;
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    messageContainer.append(messageElement);
    if(position=='left'){
        audio.play();
    }
}

form.addEventListener('submit',(e)=>{
      e.preventDefault();
      const message=messageInput.value;
      append(`You: ${message}`,'right')
      socket.emit('send',message);
      messageInput.value="";
})
const nam = prompt("Enter your name to join")
socket.emit('new-user-joined', nam);

socket.on('user-joined',name=>{
    append(`${name} joined the chat`,'right');
})

socket.on('receive',data=>{
    append(`${data.name} : ${data.message}`,'left');
})

socket.on('left',name=>{
    append(`${name} left the chat`,'right');
})

const emojiBtn = document.getElementById('emojiBtn');
const input = document.getElementById('messageInp');

emojiBtn.addEventListener('click', () => {
  // You can expand this list or use an emoji picker lib later
  const emoji = prompt("Enter emoji (e.g. 😀, ❤️, 🥳):");
  if (emoji) {
    input.value += emoji;
    input.focus();
  }
});

