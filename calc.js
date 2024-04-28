let num1 = ""
let operation = ""
let nums = []
let operations = []
let ans = 0
let buttons = document.querySelectorAll('.btn')
let posM = []
let posD = []
let func = ""
//let calcLine = document.createElement("h2")
calcLine = ""
//getting values for all the buttons   
buttons.forEach(function(button) {
    button.addEventListener('click',function(){
        if(button.value == "="){
            createNum(button.value)
            calcAns()
        }
        else if(button.value == "clear"){
            clearCalc()
        }
        else if((button.value == "cos" || button.value == "sin" || button.value == "tan" ||
        button.value == "log" || button.value == "ln" || button.value == "sq" || 
        button.value == "sqr" || button.value == "sqn") && func == ""){
            func = button.value
            calcLine += func
        }
        else{
            createNum(button.value)
        }
        if(!(parseFloat(button.value) >= 0 && parseFloat(button.value) <= 9) && button.value != "." 
        && button.value != "clear" && button.value != "cos" && button.value != "sin" && button.value != "tan" &&
        button.value != "log" && button.value != "ln" && button.value != "sq" && button.value != "sqr" && 
        button.value != "sqn"){
            operations.push(button.value)
            calcLine += button.value
            calcLine += " "
        }  
    })
   })

const toggleButton = document.getElementById('toggleButton')

let togOn = false

toggleButton.addEventListener('click', function(){
    togOn = !togOn
    if(togOn){
        toggleButton.textContent = 'DEG'
    }else {
        toggleButton.textContent = 'RAD'
    }
})

function createNum(value){
    result = 0
    if(func != ""){
        if((value == "*" || value == "/" || value == "+" || value == "-" || value == "=")){
            calcLine += num1
            calcLine += " "
            result = calcFunc(func,parseFloat(num1))
            nums.push(result)
            num1 = ""
            return
        }
        num1 += value 
        return
    }
    if((value == "*" || value == "/" || value == "+" || value == "-" || value == "="))
    {
        nums.push(parseFloat(num1))
        calcLine += num1
        calcLine += " "
        num1 = ""
        return
    }
    num1 += value
    return
}

function clearCalc(){
    nums.length = 0
    operations.length = 0
    num1 = ""
    func = ""
    return
}

function calcFunc(func,value){
    result = 0
    console.log(func)
    console.log(value)
    result = value
    if(toggleButton.textContent == 'RAD' && (func == "cos" || 
    func == "sin" || func == "tan")){
        result = value * (Math.PI/180)
        console.log(result)
    }
    if(func == "sin"){
        result = Math.sin(result)
    }else if(func == "cos"){
        console.log("did we reach here")
        result = Math.cos(result)
    }else if(func == "tan"){
        result = Math.tan(result)
    }else if(func == "log"){
        result = Math.log(result)
    }else if(func == "ln"){
        result = Math.log(result)
    }else if(func == "sq"){
        result = result * result
    }else if(func == "sqr"){
        result = Math.sqrt(result)
    }else{
        console.log("invalid")
    }
    console.log(result)
    func = ""
    return result
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

function handleBedmas(){
    for(i = 0;i < operations.length;i++){
        if(operations[i] == "*"){
            posM.push(i)
        }
    }
    result = 0
    for(i = 0; i < posM.length; i++){
        result = nums[posM[i]] * nums[posM[i] + 1]
        for(j = posM[i]; j < nums.length; j++){
            if(j != nums.length){
                nums[j] = nums[j + 1]
            }
            if(j != operations.length){
                operations[j] = operations[j + 1]
            }

        }
        nums.pop()
        operations.pop()
        nums[posM[i]] = result
    }
    for(i = 0;i < operations.length;i++){
        if(operations[i] == "/"){
            posD.push(i)
        }
    }
    result = 0
    for(i = 0; i < posD.length; i++){
        result = nums[posD[i]] / nums[posD[i] + 1]
        for(j = (posD[i]); j < nums.length; j++){
            if(j != nums.length){
                nums[j] = nums[j + 1]
            }
            if(j != operations.length){
                operations[j] = operations[j + 1]
            }
        }
        nums.pop()
        operations.pop()
        nums[posD[i]] = result
    }
}


function calcAns(){
    calcLine += "="
    calcLine += " "
    /*for(let i = 0; i < nums.length; i++){
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
    }*/
    console.log(nums)
    console.log(operations)
    if(operations.includes("*") || operations.includes("/")){
        handleBedmas()
    }
    if(nums.length == 1){
        ans = nums[0]
    }
    else{
        for(let i = 0; i < operations.length;i++){
            if(i == 0){
                ans = doOperation(operations[i],nums[i],nums[i + 1])
            }else{
                ans = doOperation(operations[i],ans,nums[i + 1])
            }
        }
    }
    calcLine += String(ans)
    let calc = document.createElement("h2") 
    calc.textContent = calcLine
    document.getElementById("showCalc").appendChild(calc)

}