let h2=document.querySelector("h2");
console.dir(h2.innerText);
 h2.innerText=h2.innerText+" from apna college";
  console.dir(h2.innerText);
let div=document.querySelectorAll(".box");
 console.dir(div);
  let idx=1;

  for(let divs of div){
     divs.innerText=`new div unique value is  ${idx}`;
      idx++;
      

  }
//  div[0].innerText="new unique value 1";
//   div[1].innerText="new unique value 2";
//    div[2].innerText="new unique value 3";



