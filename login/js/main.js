let btnSubmit = document.getElementById('btnSubmit')
let password = document.getElementById('password')
let username = document.getElementById('username')
let error = document.getElementById('error')
let errorDescriptions = []

// rules 
// not empty
// 3 symbol min
// max 15 symbol



btnSubmit.addEventListener('click', function(){
    console.log('clicked');
    error.innerText = '';
    //1 username
    errorDescriptions = []
    checkInputValue(username)
    checkInputValue(password)
    if (errorDescriptions.length > 0)
    {
        try {
          let content = document.getElementById ('modal-content')
          content.innerText = errorDescriptions.join(' , \n ')
          content.style.color = 'red'
          MicroModal.init({
            awaitCloseAnimation: true,// set to false, to remove close animation
            onShow: function(modal) {
              console.log("micromodal open");
             
    
            },
            onClose: function(modal) {
              console.log("micromodal close");
              content.style.color = 'black'
            }
          });
            
          } catch (e) {
            console.log("micromodal error: ", e);
          }   
    }

})

function checkInputValue (input) 
{
    let elementTitle = input.id
   
    

    if (input.value.trim() == '')
    {
        console.log(elementTitle + ' is empty');
        error.innerText += elementTitle + ' is empty \n'
        errorDescriptions.push(elementTitle + ' is empty')

        error.classList.remove ('d-none')
        error.style.display = 'block'
    } 
    else if (
        input.value.trim().length <= 3 || 
        input.value.trim().length >=16)
    
    {
        console.log('enter' + elementTitle + 'between 3-15 symbols');
        error.innerText += 'enter '+ elementTitle + 'between 3-15 symbols \n'
        errorDescriptions.push ('enter' + elementTitle + 'between 3-15 symbols')


        error.style.setProperty ('display', 'block', 'important')

    } else {
        error.classList.add ('d-none')
        error.removeAttribute ('style')
    }
    
}


document.addEventListener("DOMContentLoaded", function() {
  
    try {
      
     
      MicroModal.init({
        awaitCloseAnimation: true,// set to false, to remove close animation
        
      });

      
    } catch (e) {
      console.log("micromodal error: ", e);
    } 
  });
  