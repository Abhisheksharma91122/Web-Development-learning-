/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('INFO');

// Insert a few documents into the sales collection.
db.getCollection('Students').insertMany([
  {
    name: "John Doe",
    age: 30,
    education: "Bachelor's Degree",
    learning: ["React", "Node.js"],
  },
  {
    name: "Jane Smith",
    age: 25,
    education: "Master's Degree",
    learning: ["Python", "Django"],
  },
  {
    name: "Raj Patel",
    age: 28,
    education: "Diploma",
    learning: ["MongoDB", "Express.js"],
  },
  {
    name: "Emily Johnson",
    age: 32,
    education: "PhD",
    learning: ["Machine Learning", "AI"],
  },
  {
    name: "Chris Evans",
    age: 29,
    education: "Bachelor's Degree",
    learning: ["React Native", "Flutter"],
  },
  {
    name: "Sophia Lopez",
    age: 26,
    education: "Master's Degree",
    learning: ["Vue.js", "Nuxt.js"],
  },
  {
    name: "Liam Wong",
    age: 27,
    education: "Diploma",
    learning: ["PHP", "Laravel"],
  },
  {
    name: "Olivia Brown",
    age: 24,
    education: "Bachelor's Degree",
    learning: ["Java", "Spring Boot"],
  },
  {
    name: "Noah Wilson",
    age: 31,
    education: "PhD",
    learning: ["Data Science", "Big Data"],
  },
  {
    name: "Emma Davis",
    age: 23,
    education: "Bachelor's Degree",
    learning: ["Kotlin", "Android Development"],
  },
]);

// Print a message to the output window.
console.log("Done inseting data");
