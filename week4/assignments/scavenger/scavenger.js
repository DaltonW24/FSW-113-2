// Create an event listenter for the 'submit' button that calls the combineLists() function
document.getElementById("submit").addEventListener("click", combineLists)
// Modify the combineLists() function to create arrays from each scavenger hunt element in the scavenger.html document. 
// Then use the spread operator to combine these arrays into a single array. 
// Sort that array and display it in the 'AllItems' element on the scavenger.html document.

function combineLists() {
    let lstItems = document.querySelectorAll("li")
    let arr 
        for(i = 0; i < lstItems.length; i++){
            let array = [lstItems[i].textContent];
           arr[array]
    } 
    console.log(arr)
}

// The following code is a bonus addition that facilitates data entry on the scavenger.html document.
// If you first click in one of the textareas, you can then click scavenger hunt items in the unordered
// list. The value of that will be added to the appropriate textarea along with any necessary commas.

let objTargetText
const objUL = document.querySelector('#lstItems')

objUL.onclick = function(event) { 
    var source = getEventTarget(event)
    if (!objTargetText.innerHTML)
        objTargetText.innerHTML = source.innerHTML
    else
        objTargetText.innerHTML += ',' + source.innerHTML
}

function getEventTarget(e) {
    e = e || window.event
    return e.target || e.srcElement
}

function setTarget(obj) {
    objTargetText = obj
}


// let newArr = [...array1, ...array2]