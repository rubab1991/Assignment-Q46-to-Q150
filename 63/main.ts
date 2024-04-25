//Shape Shifter: Write a program that can describe either a circle or a rectangle using a special type alias,
// including properties unique to each shape.

// Creating a custom type (type alias) for shapes that could be circles or rectangles

type shape={
    kind:"circle"|"rectangle";
radius?:number;  // Only for circles
width?:number;  // Only for rectangles
height?:number;// Only for rectangles
}

// Describing a circle using our Shape type
let circle:shape={
    kind:"circle",
    radius:5,
};

// Describing a rectangle using our Shape type
let rectangle:shape={
kind:"rectangle",
width:10,
height:20
}
console.log(circle);
console.log(rectangle);



