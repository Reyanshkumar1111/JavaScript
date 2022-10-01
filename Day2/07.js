// trim()

let firstname = "  NIshU   ";
console.log(firstname);
console.log(firstname.length);

// Declaring a new variable 
let firstName = firstname.trim();   // NISHU  it will give new string 
console.log(firstName);             // Either you can create new variable or re-assign  in the Existing variable

// Re-assigning the Variable
firstname = firstname.trim();
console.log(firstname.length);
console.log(firstname);


// to upper case
firstname = firstname.toUpperCase();
console.log(firstname);

// to lower case
firstname = firstname.toLowerCase();
console.log(firstname);

// Slice
// Start index 
// End index
firstname = firstname.slice(0,4);   // it will start from index 0 to index 4 but did not include index 4
console.log(firstname);             // nish

firstname = firstname.slice(1);
console.log(firstname);             // it will start from index 1 to index (n-1) // ish
