// 1.display numbers in textbox
function displayNum(num){
    result.value +=num
}
// clear content in text box
function clearBox(){
    result.value=""
}

// 3.evaluate expression

function evaluateExpr(){
    // exp=result.value
    // output=eval(expr)
    // result.value=output

// or
    result.value=eval(result.value)
}

// 4.remove last item from text box

function removeItem(){
   curExpr= result.value
  result.value= curExpr.slice(0,-1)

}