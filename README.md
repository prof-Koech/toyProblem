# toyProblem

1  calculateGrade.js 
     ( A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.)
    ----procedure/steps---- 
Prompts user to enter a student grade.

If the grade entered is not a number(isNaN)it gives a message "You entered an invalid grade,Please enter a number between 0 and 100".this means you can not enter a number which is less than 0 or more than 100

I have used a switch case for implementation of this task.

2  speedDetector.js
-----instruction---
 (if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.)

 ----procedure/steps----
First define the speed limit and the number of kilometers per demerit point. )

If the driver's speed is less than or equal to the speed limit, it outputs "Ok" and return from the function. 
Otherwise, it calculates the number of demerit points by subtracting the speed limit from the driver's speed and dividing by the kilometers per demerit point. 

We apply the Math.floor function to round to the nearest integer. it checks if the driver has accumulated enough demerit points to have their license suspended. If so, it output "License suspended". 

3  netSalaryCalculator.js
 prompts the user to enter their salary and benefits.

 It then calculates the payee using the KRA TAx Rates.

Calculate the Deductions such as NSSF and NHIF using the current NSSF and NHIF rates.

It then deducts all deductions and determines the net salary.