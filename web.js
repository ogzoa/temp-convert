const tb = document.getElementById("tb");
const cF = document.getElementById("cF");
const cC = document.getElementById("cC");
const result = document.getElementById("result");
let temp;   



function convert(){

    if(cF.checked){
        temp = Number(tb.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
    }

    else if(cC.checked){
        temp = Number(tb.value);
        temp = (temp - 32) * (5 / 9)
        result.textContent = temp.toFixed(1) + "°C"
        

    }

    else{
        result.textContent = "Select a unit."
    }
}
