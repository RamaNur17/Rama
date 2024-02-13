const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
const specialChars = ["%","+","=","-","x"]
let output = "";

const calculate=(btnValue)=>{
    display.focus();

    if (btnValue=== "=" && output=="="){
        output =eval (output.replace("%","/100").replace("MOD","$"));
    
    } else if (btnValue === "AC"){
        output = "";
    } else { 
        if (output=== "" && specialChars.includes(btnValue)) return;
      output+= btnValue;  
    }
    display.value=output
};
buttons.forEach((button)=>{
    button.addEventListener("click",(e)=> calculate(e.target.dataset.value))
});