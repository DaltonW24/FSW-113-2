// Declare any necessary variables.

// Add an event listener that responds to the click of the "print" button by calling a function to instantiate
//  a new student object, and another function to print the certificate.
    document.getElementById("print").addEventListener("click", instant)
    

function instant(){
    const  studentOBJ = {Name: "", Class: "", Grades: ""}
    print()
}

function print(){
    let studentName = document.getElementById("studentName").value
    let studentClass = document.getElementById("className").value
    let possibleGrade = document.getElementById("possibleScores").value
    let studentScores = document.getElementById("studentScores").value
    let actualScore = possibleGrade.value / studentScores.value

    document.getElementById('certStudentName').value = studentName
    document.getElementById('certClassName').value = studentClass
    document.getElementById("certGrade").value = actualScore

 console.log(studentName, studentClass, actualScore)
}
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


// Create a function that fills in the student's name, class name, and calculated grade on the certificate .

    

// Create a function that converts the contents of a comma-separated text string to a numeric array.
// You can use this function when instantiating the arrays in the student object.
function toAry(){

} 