// Let Keyword
// Declare vaiable with let keyword
let value2 = "Hello World 11";
// let value1 = 1115;       Error you have Declared before you cannot re-declare again in let,const 
console.log(value2);
value2 = "Nishu";
console.log(value2);

let x = 5;
let y = 6;
let z = x + y;
console.log("Value: ",z);

document.getElementById("demo1").innerHTML="The value of z is: "+z;

let carname = "AUDI";
document.getElementById("demo2").innerHTML="Carname: "+carname;

let name = "NISHU";
let fav = "MISS YOU";
document.getElementById("demo3").innerHTML= name + "<br>"  + fav;

let x1 = "5" + 2 + 3;               // 2 and 3 are converted in to Strings as 5 is a String and concatenated.
document.getElementById("demo4").innerHTML="The value of x1 is: "+x1;

let x2 = 2 + 3 + '5';
document.getElementById("demo5").innerHTML="The value of x2 is: "+x2;

let x3= 2;   // Allowed

{
let x4 = 3;   // Allowed
}

{
let x5 = 4;    // Allowed
}


let  x10 = 10;
// Here x10 is 10

{  
  let x10 = 2;
  // Here x10 is 2
}

// Here x10 is 10













