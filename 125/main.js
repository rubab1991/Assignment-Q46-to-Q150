//Modify a method in an object to use the this keyword to access another property in the same object.
// An object with multiple properties and a method that interacts with them using 'this'
// const rectangle={
//     length:4,
//     width:5,
//     calculateArea:function(){
//         return this.length*this.width;
//     },
// }
// console.log(rectangle.calculateArea());
var rectangle = {
    length: 4,
    width: 5,
    calculateArea: function () {
        return this.length * this.width;
    }
};
console.log(rectangle.calculateArea());
