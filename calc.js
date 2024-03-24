let num1 = ""
let num2 = ""
let operation = ""
let buttons = document.querySelectorAll('.btn')
//getting values for all the buttons   
buttons.forEach(function(button) {
    button.addEventListener('click',function(){
        if(button.value == "="){
            calcAns()
        }
        else if(button.value != "*" && button.value != "/" && button.value != "+" && button.value != "-" && operation == ""){
            num1 += button.value
            console.log(num1)
        }
        else if(num1 != "" && operation != ""){
            num2 += button.value
            console.log(num2)
        }
        else if(num2 == ""){
            operation += button.value
            console.log(operation)
        }  
    })
   })


function calcAns(){
    console.log("num1=",num1)
    console.log("num2=",num2)
    console.log("operation=",operation)
}