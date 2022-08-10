// Load lodash using require() and assign it to a variable named lodash (easy to remember, right?)
let lodash = require("lodash");

let name = "brittany";
console.log(`Original Name: ${name}`);

// call the upperFirst() function in lodash to convert the first letter of the string to uppercase
// Capitalized the first letter, then makes the rest lower-case
name = lodash.upperFirst(name);
console.log(`upperFirst Name: ${name}`);

// startCase() based off of the upperCase() version above
// Capitalizes the first letter, then leaves the rest as is
name = lodash.startCase(name);
console.log(`startCase Name: ${name}`);

// lowerCase() based off of the upperFirst() version above
// makes the entire string lower-case
name = lodash.lowerCase(name);
console.log(`lowerCase Name: ${name}`);

// startCase() based off of the lowerCase() version above
// Capitalizes the first letter, then leaves the rest as is
name = lodash.startCase(name);
console.log(`startCase Name: ${name}`);

// upperCase() based off of the lowerCase() version above
// Makes the entire string upper-case
name = lodash.upperCase(name);
console.log(`upperCase Name: ${name}`);

// startCase() based off of the upperCase() version above
// Capitalizes the first letter, then leaves the rest as is
name = lodash.startCase(name);
console.log(`startCase Name: ${name}`);