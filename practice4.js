 let num=prompt("enter the number n");
  let newarr=[];

  for(let i=1;i<=num;i++){
     newarr.push(i);

  }
   console.log(newarr);
    let sum= newarr.reduce((prev,curr)=>{
        return prev+curr;

    })
     console.log(sum);
     let product=newarr.reduce((prev,curr)=>{
         return prev*curr;

     })
      console.log(product);
      
