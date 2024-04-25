//Iterate over a Map of student IDs and names, and log each pair to the console.

// Creates a Map to store student IDs (keys) and names (values)
const students= new Map<string,string>();
students.set(1 ,"Alice");   
students.set(2 ,"Bob");
students.set(3 ,"Eric");

// Iterates over the Map and logs each student ID and name
students.forEach((name,id)=>{
    console.log(`Students ID: ${id},Name: ${name}`);
});

// This loop goes through each student and logs their ID and name.