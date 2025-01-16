// CRUD - create , read , update , delete




// Create
use("CrudDB")
// db.createCollection("courses")
// db.courses.insertOne({
//     Name : "Abhishek is good boy",
//     price : "priceless",
//     assignment : 12,
//     project : 34
// })
// db.courses.insertMany([
//     {
//         name: "Abhishek is a good boy",
//         price: "priceless",
//         assignment: 12,
//         project: 34
//     },
//     {
//         name: "Rohan is a smart student",
//         price: "expensive",
//         assignment: 8,
//         project: 29
//     },
//     {
//         name: "Priya loves coding",
//         price: "invaluable",
//         assignment: 15,
//         project: 40
//     },
//     {
//         name: "Suresh enjoys mathematics",
//         price: "moderate",
//         assignment: 10,
//         project: 20
//     },
//     {
//         name: "Anjali excels in physics",
//         price: "priceless",
//         assignment: 14,
//         project: 38
//     },
//     {
//         name: "Amit is a creative designer",
//         price: "reasonable",
//         assignment: 9,
//         project: 25
//     },
//     {
//         name: "Neha is a hardworking student",
//         price: "valuable",
//         assignment: 11,
//         project: 30
//     },
//     {
//         name: "Karan is a tech enthusiast",
//         price: "unique",
//         assignment: 16,
//         project: 42
//     },
//     {
//         name: "Meera loves solving puzzles",
//         price: "affordable",
//         assignment: 13,
//         project: 35
//     },
//     {
//         name: "Rahul enjoys programming",
//         price: "premium",
//         assignment: 17,
//         project: 45
//     }
// ])





// Read 
// let a = db.courses.find({price : "priceless"})
// console.log(a.toArray())
// console.log(a.count())
// console.log(a)

// we can also use operators as finding or in mongodb operations 
let b = db.courses.find({assignment :{ $gte : 11}})
console.log(b.count())





// Update
// db.courses.updateOne({price : "priceless"} , {$set:{price : 100}})
// db.courses.updateMany({price : "priceless"} , {$set:{price : 120}})




// Delete
// db.courses.deleteOne({price : "reasonable"})
// db.courses.deleteMany({price : "affordable"})