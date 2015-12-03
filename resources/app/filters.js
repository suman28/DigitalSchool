angular.module('filters.module',['ngMaterial','ui.router','ngAnimate','routes.module','chartsController.module','services.module'])
//filter to convert numbers
.filter('ordinal',function(){
  return function(number){
    if(isNaN(number) || number < 1) {
      // If the data is not a number or is less than one (thus not having a cardinal value) return it unmodified.
      return number;
    }
    else{
        // If the data we are applying the filter to is a number, perform the actions to check it's ordinal suffix and apply it.
      var lastDigit = number%10;
      if(lastDigit == 1){
        return number + 'st';
      }
      else if(lastDigit == 2){
        return number + 'nd';
      }
      else if (lastDigit == 3) {
        return number + 'rd';
      }
      else{
        return number + 'th';
      }
    }
  }
})

//filter to make camelCase words
.filter('capitalize',function(){
  // Create the return function and set the required parameter as well as an optional paramater
  return function(input,char){
     // If the input data is not a number, perform the operations to capitalize the correct letter.
    var char = char-1||0;
    var letter = input.charAt(char).toUpperCase();
    var output = [];
    if(isNaN(input)){
      for(var i=0;i<input.length;i++){
        if(i==char){
          output.push(letter);
        }
        else{
          output.push(input[i]);
        }
      }
      return output.join('');
    }
      else{
        return input;
      }
  }
})

//filter to return the static languages
.filter('typeStatic',function(){
  return function(input){
    var output=[];
    angular.forEach(input,function(language){
      if(language.type=='static'){
        output.push(language);
      }
    })
    return output;
  }
})
//filter to make custom currency symbols and placing them before or after the number
.filter('customCurrency',function(){
  return function(input,symbol,place){
    var symbol = symbol || '$';
    var place = place === undefined ? true : place;

    if(place===true){
      return symbol+input;
    }
    else{
     return input+symbol;
    }
  }
})

// function customCurrency(){
//   return function(input,symbol,place){
//     var symbol = symbol || '$';
//     var place = place === undefined ? true : place;
//
//     if(place===true){
//       return symbol+input;
//     }
//     else{
//      return input+symbol;
//     }
//   }
// }
