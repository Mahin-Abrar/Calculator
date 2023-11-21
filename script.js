
// selecting element
let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');
 
// finishing of load of html
document.addEventListener("DOMContentLoaded",function() { 
  buttons.forEach(function(button){                         // adding click for all buttons
    button.addEventListener('click',function() {
      let buttonInput =button.innerHTML;                    //checking the buttons and executing according to it
      switch (buttonInput){
        case 'C':
          input.value='';
          break;
        case '⌦':
            input.value=input.value.slice(0,-1);
            return input;
            break;
        case '=':
          try {
            input.value = eval(input.value);
          } catch (error) {
            input.value = 'Opps';
          }
          break;
          default:
          input.value += buttonInput;                       //for all regular button valuees
          break;
      }
    });
  });
});