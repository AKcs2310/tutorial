let arr=[1,2,3,4,5];
 arr.forEach((val,idx,arr)=>{
     console.log(val,idx,arr);


 });
// print square of number using for each loop
 let brr=[1,2,3,4];
  let calcsquare= (val)=>{
    console.log(val*val);

  }
  brr.forEach(calcsquare);
  // filter marks greater than 90
   let marks=[1222,34,56,,888,99,1000];
    let newmarks= marks.filter((mark)=>{
        return mark>90;

    })
     console.log(newmarks);
     