//  Construct an object for a laptop including properties make, model, year,
//  and a method describe() that logs a sentence about the laptop.
// let laptop={
//     make:"Dell",
//     model:"New Elite Series",
//     year:2022,
// describe:function(){console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);},};
// laptop.describe();
var lapton = {
    make: "Dell",
    model: "New Elite series",
    year: 2012,
    describe: function () { console.log("this lapton is ".concat(this.make, " ").concat(this.model, " ").concat(this.year)); },
};
lapton.describe();
