function validParentheses(parens){
    
  var length = parens.length / 2;
  
  for (var i = 0; i <= length; ++i) {
    parens = parens.replace('()', '');
  }
  
   if (parens == '') {
     return true;
   }
   
   return false;
}