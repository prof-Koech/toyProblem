function calculateGrade() {
  const marks = parseInt(prompt("Enter the student's marks (between 0 and 100):"));

  if (marks >= 80 && marks <=100) { //checks if marks is between range of 80 and 100
    return 'A';
  } else if (marks >= 60 && marks <80) {//checks if marks is between range of 60 and 79
    return 'B';
  } else if (marks >= 50 && marks < 60) {//checks if marks is between range of 50 and 59
    return 'C';
  } else if (marks >= 40 && marks <50) {//checks if marks is between range of 40 and 49
    return 'D';
  } else if (marks<40 && marks >=0) {  //checks if marks is between range of 0 and 39
    return 'E';
  }else {
    return 'invalid score'; //checks if the marks is outside the range
  }
}