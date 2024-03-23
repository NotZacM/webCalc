let num1 = ""
let num2 = ""
let operation = ""
const buttons = document.querySelectorAll('.btn')
//getting values for all the buttons   
buttons.forEach(button =>{
    button.addEventListener('click',function(){
        if(this.value == "="){
            calcAns()
        }
        else if(num1 == ""){
            num1 = this.value
            console.log(num1)
        }
        else if(num1 != "" && num2 == ""){
            operation = this.value
            console.log(operation)
        }
        else{
            num2 = this.value
            console.log(num2)
        }
    })
   })


function calcAns(){
    console.log("we are here")
    console.log("num1=",num1)
    console.log("num2=",num2)
    console.log("operation=",operation)
}