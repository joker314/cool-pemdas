var split = function(expr){
  var temp = ""
  var out = []
  
  for(var i = 0; i < expr.length; i++){
    if(temp.length){
      if(expr[i] * 1 == expr[i] || expr[i] === "."){
        temp += expr[i]
      } else {
        out.push({
          "type" : "number",
          "value": temp
        })
        
        temp = ""
        if(expr[i].trim() === expr[i]){
          out.push({
            "type" : "op",
            "value": expr[i]
          })
        }
      }
    } else {
      if(expr[i] * 1 == expr[i] || expr[i] === "."){
        temp = expr[i] === "." ? "0." : expr[i]
      } else {
        out.push({
          "type" : "op",
          "value": expr[i]
        })
      }
    }
  }
  return out
}
