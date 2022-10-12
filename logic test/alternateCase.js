/*
Alternate each case of each of string given 

alternateCase("abc")            => "ABC"
alternateCase("ABC")            => "abc"
alternateCase("Hello World")    => "hELLO wORLD"

*/

function alternateCase(kata) {
  
    var output = '';
    for (var i = 0 ; i < kata.length; i++) {
      var character = kata[i];
      if (character == character.toLowerCase()) {
       
        output = output + character.toUpperCase();
      } else {
        
        output = output + character.toLowerCase();
      }
    }
    console.log(output)
  }


alternateCase("abc")            
alternateCase("ABC")            
alternateCase("Hello World")   


