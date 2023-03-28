
const prompt = require("prompt-sync")();

function studentGrade1(){
  let marks = prompt("Enter a student Grade : ");
  let grade;
  marks=parseFloat(marks);//it takes in student marks as float values cause marks may contain a point
switch(marks){
  case (marks>79):
    grade= 'A';
    break;
  case (marks>60 && marks<=79):
    grade= 'B';
    break;
  case (marks>50 && marks<60):
    grade= 'C';
    break;
  case (marks>40 && marks<=49):
    grade= 'D';
    break;
  default:
    grade= 'E';
  
}
return `The student's grade is ${grade}`;
}
console.log(studentGrade1())