//console.log("Hello World");
/*console.log("Hello World");
console.log("Hello World");

let data = "bakitbagantolagingnakatulalahindinamanmabulaga";

alert("Pangit ng kapitbahay namin");
document.write("Hi World");
document.getElementById("paragraph2").innerHTML="Chosen Text";

alert(data);
alert(data);*/

// Let Variable - the value is interchangeable

let var1 = "Raymart Rosali";
//var1 = "Giovanni Oro";

//alert(var1);
// Constant Variable - the value of this cariable can't be changed

const var2 = "Harold Caguing";
//var2 = "Rafhael Hailiar";
//alert(var2);

// DATA TYPES

// STRING
let variableString = "I am a Sample String";
// alert(variableString);

// NUMBER

let variableNumber = 12;
// alert(variableNumber);

// Boolean

let variableBoolean = false;
// alert(variableBoolean);

// Array
let student = ["Asta", "Yuno", "ALdo", "Betho"];
// alert(student);
// Multiple Call of Infomation
// alert(student[2]);

function sampleFunction(){
    alert("Hello World 1");
    alert("Hello World 2");
    alert("Hello World 3");
}
function showName(name, age){
    alert("Ang Taong ito ay si");
    alert(name);
    alert("Ang edad nya ay");
    alert(age);
}
function showSum(a, b){
    let sum = a + b;
    alert(sum);
}
function showSum2(){
    let a = 1;
    let b = 2;
    let sum = 1 + b;
    alert(sum);
}
function showSumFinal(){
    let a = Number(document.getElementById("operand1").value);
    let b = Number(document.getElementById("operand2").value);
    let result = a + b;
    alert(result);
}
function showDifferenceFinal(){
    let a = Number(document.getElementById("operand1").value);
    let b = Number(document.getElementById("operand2").value);
    let result = a - b;
    alert(result);
}
function showProductFinal(){
    let a = Number(document.getElementById("operand1").value);
    let b = Number(document.getElementById("operand2").value);
    let result = a * b;
    alert(result);
}
function showQoutientFinal(){
    let a = Number(document.getElementById("operand1").value);
    let b = Number(document.getElementById("operand2").value);
    let result = a / b;
    alert(result);
}
//sampleFunction();
//This is how we call a function
// Additional

let samp1 = 5;
let samp2 = 3;

let exponentiation = samp2 ** samp1;
//alert(exponentiation);
// Exponentiation gets the result for base and exponent (base ** exponent)

let modulus = samp1 % samp2;
alert(modulus);
// Modulus gets the remainder of the two values

function lengthConverter() {
    document.getElementById("outputMeters").innerHTML = valNum / 0.0022046;
  }