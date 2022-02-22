let btnSubmit = document.getElementById('btnSubmit')
let password = document.getElementById('password')
let username = document.getElementById('username')
let error = document.getElementById('error')

// rules 
// not empty
// 3 symbol min
// max 15 symbol



btnSubmit.addEventListener('click', function(){
    console.log('clicked');
    error.innerText = '';
    //1 username
    checkInputValue(username)
    checkInputValue(password)
})

function checkInputValue (input) 
{
    let elementTitle = input.id
    let errorDescriptions = []

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
    
    {console.log('enter' + elementTitle + 'between 3-15 symbols');
    error.innerText += 'enter '+ elementTitle + 'between 3-15 symbols \n'
        errorDescriptions.push ('enter' + elementTitle + 'between 3-15 symbols')


    error.style.setProperty ('display', 'block', 'important')

    } else {
        error.classList.add ('d-none')
        error.removeAttribute ('style')
    }
    if (errorDescriptions.length > 0)
    {
        try {
      
            MicroModal.init({
              awaitCloseAnimation: true,// set to false, to remove close animation
              onShow: function(modal) {
                console.log("micromodal open");
              },
              onClose: function(modal) {
                console.log("micromodal close");
              }
            });
            
          } catch (e) {
            console.log("micromodal error: ", e);
          }   
    }
}


