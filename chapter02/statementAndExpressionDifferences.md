<!-- difference between statement and Expression -->

JavaScript statements are the instructions given to a computer to execute. These statements are composed of values, operators, expressions, keywords and comments.
We have declaration statement that is statement that creates variables and functions using var and function statement respectively. Examples are:
var sumAll; var multiplicationAssignment;
Expression statement: wherever JavaScript expects a statement, you can also write an expression. Such statements are referred to as expression statements but you can not use a statement in a place of expression.
example:
const myMath = (b - 1);
Conditional statements: this executes statements based on the value of an expression. Examples include if...else, switch.
Loops and Jump statements: this includes while, do/while, for, for/in

Expressions: an expression is a single unit of JavaScript code that the JavaScript engine can evaluate, and return a value. Expression can vary in complexity, we have arithmetic expression, logical, sting etc.
example of arithmetic expression:
1 / 2
i++
example of logical expression:
10 > 9;
age ===20 && model === 2030;

Difference between JavaScript statement and Expression
Wherever JavaScript expects a statement, you can also write an expression. Such a statement is called an expression statement. The reverse does not hold: you cannot write a statement where JavaScript expects an expression.
For example, an if statement cannot become the argument of a function.
