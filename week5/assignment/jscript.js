// Declare any necessary variables.

// Add an event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
document.getElementById("reset")
// Add an event listener that responds to the click of the reset button by resetting all the values
// both in the form and in the certificate.
document.getElementById("reset").addEventListener("click", resetAll)
function resetAll(){
    document.getElementById('studentName').value = " "
    document.getElementById('className').value = " "
    document.getElementById('studentScores').value = " "
    document.getElementById('possibleScores').value = " "
    console.log(document.getElementById('studentName').value)
    console.log(document.getElementById('className').value)
    console.log(document.getElementById('studentScores').value)
}

// Create a function that instantiates a new student object with the input from the HTML form.

function instant(){
    var studentOBJ = {StudentName:document.getElementById("studetnName").value, className:"Doe", age:50, eyeColor:"blue"};
}
// Create a function that fills in the student's name, class name, and calculated grade on the certificate .
document.getElementById("print").addEventListener("click", studentFill)
function studentFill(){
    document.getElementById('certStudentName').value = document.getElementById('studentName').value
}
console.log(document.getElementById('certStudentName').value)
            //(PRINT BUTTON ISN'T WORKING RIGHT NOW)

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function toAry(){
// not really sure where to start on this one.
} 