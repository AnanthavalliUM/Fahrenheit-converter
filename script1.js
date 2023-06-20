function convert(){
    let celVal = Number(document.getElementById("input").value);
    let felVal = (celVal * 9)/5 + 32;
    let result = document.getElementById("result");
    result.innerHTML = felVal.toFixed(1) + "&#8457"
    
    
    
  }