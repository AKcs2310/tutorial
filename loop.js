let name="ankit";
 let size=0;

 for(let i of name){
     console.log(i);
      size++;


 }
  console.log(size);
  // use of for in loop
   let student={
     name:"ankit",
     age:20,
     cgpa:7.5,
     isPass:true


   };
    for(let key in student){
        console.log("key=",key,"value=",student[key]);

    }
