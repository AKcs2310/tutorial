

// function countvowels(str){
//      let  count=0;

//       for(const char of str){
//          if(char=='a' || char=='e' || char=='i'|| char=='o' || char=='u'){
//             count++;

//          }
//       }
//        return count;

// }
//  let ans=countvowels("aeiou");
//   console.log(ans);
   const countvowels=(str)=>{
    let  count=0;

      for(const char of str){
         if(char=='a' || char=='e' || char=='i'|| char=='o' || char=='u'){
            count++;

         }
      }
       return count;

     

   };
     let ans=countvowels("aeiou");
   console.log(ans);


