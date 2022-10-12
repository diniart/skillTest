/*
"I am A Great human"
into
"I ma A Taerg namuh"

// note: observe the Capital word behavior. Capital only when in the first letter

*/


function reverseWord(kata) {
    let kataArr = kata.split(' ');
    let kataTerbalik = [];
  
    kataArr.forEach(word => {
      let reverse = '';
      let jml = word.length - 1;
      while(jml >= 0) {
        reverse += word[jml];
        jml --;
      }
      kataTerbalik.push(reverse);
    });
    console.log(kataTerbalik.join(' '));
  }
  
 
  reverseWord("I am A Great human");