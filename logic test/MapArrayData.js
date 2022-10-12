/*
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] 
is equal to The Product of all the elements of Arr[] except Arr[i].

productArray([12,20])           => [20,12]
productArray([12,20])           => [20,12]
productArray([3,27,4,2])        => [216,24,162,324]
productArray([13,10,5,2,9])     => [900,1170,2340,5850,1300]
productArray([16,17,4,3,5,2])   => [2040,1920,8160,10880,6528,16320]

*/

function productArray(angka){
    let result = []; 
      for (var i=0; i<angka.length; i++){
          result.push(angka.reduce((a, b)=>a*b)/angka[i] )
      }
      console.log(result); 
  }


  productArray([12,20])           
productArray([12,20])           
productArray([3,27,4,2])        
productArray([16,17,4,3,5,2])   