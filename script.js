// $(".button").click(function(){console.log("cliked")});
// $(".button").on("click", function() {
//     console.log("Button clicked");
// });
let string = "";
let buttons = document.querySelectorAll('.button');
console.log
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML =="💩"){
        string=eval(string);
        let newString=String(string).slice(0,-1);
      document.querySelector('input').value = newString;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
      }
  })
})