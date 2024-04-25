//Find the Average Grade: Given a list of grades, calculate the average grade.
// A list of grades
var grades = [55, 76, 89, 22, 34, 35];
// Calculates the average grade
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
