// $(".button").click(function(){console.log("cliked")});
// $(".button").on("click", function() {
//     console.log("Button clicked");
// });


// function deleteLastDigit() {
//   let input = document.getElementById('display');
//   let buttons = display.value;


//   var newValue = currentValue.slice(0, -1);


//   display.value = newValue;
// }


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
                input.value = '';
                let overlay = document.createElement('div');
                overlay.style.position = 'fixed';
                overlay.style.top = '0';
                overlay.style.left = '0';
                overlay.style.width = '100%';
                overlay.style.height = '100%';
                overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)'; 
    
                let img = document.createElement('img');
                img.src = 'oops.jpeg';
                img.alt = 'Opps Image';
                img.style.width = '100%';
                img.style.height = '100%';
                overlay.appendChild(img);
                document.body.appendChild(overlay);
                break;
              }
        // case '=':
        //   try {
        //     input.value = eval(input.value);
        //   } catch (error) {
        //     input.value = 'Opps';
        //   }
          break;
          default:
          input.value += buttonInput;
          break;
      }
    });
  });
});


      
        



// function deleteLastDigit() {
//   var display = document.getElementById('display');
//   var currentValue = display.value;


//   var newValue = currentValue.slice(0, -1);


//   display.value = newValue;
// }

// let input = document.querySelector('.input');
//   let buttons = document.querySelectorAll('.button');
// document.addEventListener("DOMContentLoaded", function () {
//

//   buttons.forEach(function (button) {
//     button.addEventListener('click', function () {
//       let buttonInput = button.textContent;

//       if (buttonInput === 'C') {
//         // Clear the input field
//         input.value = '';
//       } else if (buttonInput === '⌦') {
//         // Backspace functionality
//         input.value = input.value.slice(0, -1);
//       } else if (buttonInput === '=') {
//         // Evaluate the expression
//         try {
//           input.value = eval(input.value);
//         } catch (error) {
//           input.value = 'Error';
//         }
//       } else {
//         // Append the button value to the input field
//         input.value += buttonInput;
//       }
//     });
//   });
// });
