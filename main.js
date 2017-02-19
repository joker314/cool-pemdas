var pemdas = [
  {"ltr" : false, "ops" : ["!"]},
  {"ltr" : false, "ops" : ["^"]}
  {"ltr" : true,  "ops" : ["*", "/"]},
  {"ltr" : true,  "ops" : ["+", "-"]}
]

var operators = {
  "!" : {"type" : "unary postfix", "run" : function(prev){j=1;for(var i = 1; i < prev; i++){j*=i}return j}},
  "^" : {"type" : "binary", "run" : Math.pow},
  "*" : {"type" : "binary", "run" : function(a,b){return a * b}},
  "/" : {"type" : "binary", "run" : function(a,b){return a / b}},
  "+" : {"type" : "binary", "run" : function(a,b){return a + b}},
  "-" : {"type" : "binary", "run" : function(a,b){return a - b}}
}

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

var evaluate = function(expr, element){
  expr = split(expr)
  
  for(var i = 0; i < expr.length; i++){
    var box = document.createElement("SPAN") 
    box.className = "box"
    box.id = "pemdas-visual-box-" + i
    box.innerText = expr[i].value
    
    element.appendChild(box)
  }
}
