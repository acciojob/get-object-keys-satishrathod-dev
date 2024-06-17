//your JS code here. If required.
// Step 1: Create an object called student with a property called name
const student = {
  name: "John Doe"
};

// Step 2: Add a method to the Object prototype called getKeys
Object.prototype.getKeys = function() {
  return Object.keys(this);
};

// Test the getKeys method
console.log(student.getKeys()); // Output: ["name"]