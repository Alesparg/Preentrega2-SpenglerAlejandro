const form = document.getElementById('message-form');
const input = form.querySelector('input[type="text"]');
const messagesList = document.getElementById('messages');

form.

form


addEventListener('submit', (event) => {
  event.
 
preventDefault();
  
 
const message = input.value.trim();
  if (message) {
    
   
const li = document.createElement('li');
    li.
   
textContent = message;
    messagesList.
   
appendChild(li);
    input.
   
value = '';
  }
});

  

 
Este