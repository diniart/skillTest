/* Description:
Create a function that takes one positive three digit integer and rearranges its digits to get the maximum possible number. 
Assume that the argument is an integer.


Returm null if the argument is invalid.

maxRedigit(123) --> 321
maxRedigit(231) --> 321
maxRedigit(321) --> 321

maxRedigit(-1)  --> null 
maxRedigit(0)   --> null
maxRedigit(99)  --> null
maxRedigit(1000) --> null
*/

function maxRedigit(angka){
    if (angka>0 && angka<=999 && angka>=100 ){
        let angka2 = parseInt(angka.toString().split("").sort((a, b) => b - a).join(""));
      console.log(angka2);
        


    }else{
        console.log(null);
    }

}


maxRedigit(123);

maxRedigit(231) 
maxRedigit(321) 

maxRedigit(-1)    
maxRedigit(0)   
maxRedigit(99)  
maxRedigit(1000) 