// modify this script to populate the month select you create in the HTML page from an array of month names
// you can use either a for loop or an array.map to populate the select. remember that while arrays start with 
// zero, month numbers go from 1-12

// modify this script to run a function called printCalendar() when the user clicks the "Go" button

// modify this script to use the first day of the month the user selects in place of the const today 

function printCalendar(){
// In my last attempt we noticed that it would just add another calendar whenever we pressed the go button. 
//Do i need to clear the array up here, or would i do it at the end of the function?
//I did some reading on how to go about clearing the values and this was the best i coudl find
// https://www.codehim.com/date-time/dynamic-calendar-in-javascript-with-example/
// It was helpful seeing the calendar written this way, but not helpful for this specifically    
    const today = new Date(`${ document.querySelector("#monthSelect").value} 1,${document.getElementById("year").value} `) 
    console.log(`${ document.querySelector("#monthSelect").value} 1,${document.getElementById("year").value} `)
    const month = today.getMonth()
    let days 
    switch (month) { 
        case 1:
            days = 28
            break
        case 3:
        case 5:
        case 8: 
        case 10: 
            days = 30
            break
        default:
            days = 31
    }
    
let x
const weekday = today.getDay()
for (x = 0; x < weekday; x++){
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
}

let dt = 0
do {
    dt++
    document.getElementById('calendarDays').innerHTML += `<div class='calendarCell'>${dt}</div`
} while ( dt < days)

const monthName = today.toLocaleDateString('default', {month:'long'})
const year = today.getFullYear()
document.querySelector('.calendarTitle').innerText = `${monthName} ${year}`

const remainder = (7 - ((x + dt) % 7))
let y = 0
while ( y < remainder) {
    document.getElementById('calendarDays').innerHTML += "<div class='blankDay'>&nbsp;</div>"
    y++
}
}





const MonthNames = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
for(i = 0; i < MonthNames.length; i++){
    var option = document.createElement("option")
    option.text = MonthNames[i]
    document.querySelector("#monthSelect").add(option)
}
const today = new Date()
document.querySelector("#year").value = today.getFullYear()
document.getElementById("go").addEventListener("click", printCalendar)
    
    printCalendar()
