// let cities=["dib","tin","delhi","mumbai"];
//  for(let ele of cities){
//      console.log(ele);

//  }
 let students=[85,97,88,90,88];
  let total=0;

  for(let ele of students){
     total+=ele;


  }
let avg=total/students.length;
 console.log(` the average marks of the class is ${avg}`);
let prices=[250, 645,300,900,50];
 for(let i=0;i<prices.length;i++){
    let offer=prices[i]/10;
     prices[i]=prices[i]-offer;

 }
  console.log(prices);
   let arr=[1,2,3,4,5,6,7,8,9];
    arr.splice(1,2,100,99);
    console.log(arr);
     let brr=arr.slice(1,4);
      console.log(brr);




  
  