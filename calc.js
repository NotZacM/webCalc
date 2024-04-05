let num1 = ""
let operation = ""
let nums = []
let operations = []
let ans = 0
let buttons = document.querySelectorAll('.btn')
//let calcLine = document.createElement("h2")
calcLine = ""
//nums.length != 0 && nums.length % 2 != 0 &&
//getting values for all the buttons   
buttons.forEach(function(button) {
    button.addEventListener('click',function(){
        if(button.value == "="){
            createNum(button.value)
            calcAns()
        }
        else{
            createNum(button.value)
        }
        if(!(parseFloat(button.value) >= 0 && parseFloat(button.value) <= 9)){
            operations.push(button.value)
        }  
    })
   })

function createNum(value){
    if((value == "*" || value == "/" || value == "+" || value == "-" || value == "="))
    {
        nums.push(parseFloat(num1))
        num1 = ""
        return
    }
    num1 += value
    return
}

function calcFunc(){

}

function doOperation(op, num1, num2){
    if(op == "+"){
        return num1 + num2
    }else if(op == "-"){
        return num1 - num2
    }else if(op == "/"){
        return num1 / num2
    }else if(op == "*"){
        return num1 * num2
    }
}


function calcAns(){
    for(let i = 0; i < nums.length; i++){
        calcLine += nums[i]
        calcLine += " "
        if(i == operations.length){
            calcLine += "="
            calcLine += " "
        }
        else{
            calcLine += operations[i]
            calcLine += " "
        }
    }
    for(let i = 0; i < operations.length;i++){
        if(i == 0){
            ans = doOperation(operations[i],nums[i],nums[i + 1])
        }else{
            ans = doOperation(operations[i],ans,nums[i + 1])
        }

    }
    calcLine += String(ans)
    let calc = document.createElement("h2") 
    calc.textContent = calcLine
    document.getElementById("showCalc").appendChild(calc)

}