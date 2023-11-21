let input = document.querySelector('.input');
let buttons = document.querySelectorAll('.button');
document.addEventListener("DOMContentLoaded",function() { 
  buttons.forEach(function(button){
    button.addEventListener('click',function() {
      let buttonInput =button.innerHTML;
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
          input.value += buttonInput;
          break;
      }
    });
  });
});