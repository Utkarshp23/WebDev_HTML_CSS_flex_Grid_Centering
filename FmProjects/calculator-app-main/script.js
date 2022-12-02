const buttons = document.querySelectorAll('button')
// console.log(buttons);

const display = document.querySelector('.display')


buttons.forEach(button => {
  button.addEventListener("click", () => {
     let val1=null;

     val1= button.innerText;
  })
})