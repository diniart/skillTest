/*
Create solution function that accept 1 parameter that be will multiple number 3 and 5 while each result of that multiplication is still lower than parameter inputed

solution (10) // => 23 = 3 + 5 + 6 + 9
solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18

*/


function solution(angka){
  
        let numb ;
        let jml = 0
        for(i = 1;i<angka;i++){
            numb = i;
            if(numb % 5 == 0 || numb%3==0 ){
              
                //console.log(i)
                jml = jml + numb
                
            }
        }
        console.log(jml) 
}


solution (10) // => 23 = 3 + 5 + 6 + 9
solution (20) // => 78 = 3 + 5 + 6 + 9 + 10 + 12 + 15 + 18