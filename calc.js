let num1 = "";
let num2 = "";
let operation = "";

function printCalc(){
   //getting values for all the buttons
   const buttons = document.querySelectorAll('.btn');
   buttons.forEach(button =>{
    button.addEventListener('click',function(){
        if(num1 == 0){
            num1 = this.value;
            console.log(num1);
        }else if(num1 !=0 && num2 == 0){
            operation = this.value;
            console.log(operation);
        }
        else{
            num2 = this.value;
            console.log(num2);
        }
    })
   })
}