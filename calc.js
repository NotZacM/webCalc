let num1 = ""
let num2 = ""
let operation = ""
let ans = 0
let buttons = document.querySelectorAll('.btn')
let calcLine = document.createElement("h2")
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
    if(operation == "*"){
        ans = parseFloat(num1 * num2)
    }
    else if(operation == "/"){
        ans = parseFloat(num1 / num2)
    }
    else if(operation == "-"){
        ans = parseFloat(num1 - num2)
    }
    else{
        ans = parseFloat(num1 + num2)
    }
    let calc = document.createElement("h2") 
    calcLine = String(num1 + " " + operation + " " + num2 + " = " + ans)
    calc.textContent = calcLine
    document.getElementById("showCalc").appendChild(calc)
    console.log("num1=",num1)
    console.log("num2=",num2)
    console.log("operation=",operation)
}