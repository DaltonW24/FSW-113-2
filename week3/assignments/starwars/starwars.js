// declare any necessary variables

// define a function called 'fetchData()' that passes the values from 
// the 'queryType' and 'itemID' elements in starwars.html to the function 
// called 'getFromSWAPI()'

function fetchData(){
    let queryType = document.getElementById("queryType").value
    let itemID = document.getElementById("itemID").value
    getFromSWAPI(queryType, itemID)
}


function getFromSWAPI(queryType, itemID) {
    // assign values to any necessary variables
    const fetchData = fetch(`https://swapi.dev/api/${queryType}/${itemID}`)
    .then(function (response) {
        return response.json()
    }) 
    .then(function(data){
        updateInfo(data)
    })
    .catch(function(err) {
        console.warn(err) 
    })
}
// create a new function called 'updateInfo()' that receives the data from 
// the call to that function (see above). Use logic to write the appropriate
//labels to 'dataLabel1' and 'dataLabel2' elements in starwars.html, as well
// as the appropriate values from the data object to the 'dataValue1' and 
// 'dataValue2' elements in starwars.html.

function updateInfo(data){
    let queryType = document.getElementById("queryType").value
    console.log(data)
    if(queryType === "people"){
        document.getElementById("dataValue1").innerHTML = `Person Name: ${data.name}`
        document.getElementById("dataValue2").innerHTML = `Hair Color: ${data.hair_color}`
    }   
        else if(queryType === "planets"){
            document.getElementById("dataValue1").innerHTML = `Planet Name: ${data.name}`
            document.getElementById("dataValue2").innerHTML = `Diameter: ${data.diameter}`
        }
            else if(queryType === "starships"){
                document.getElementById("dataValue1").innerHTML = `Starship Name: ${data.name}`
                document.getElementById("dataValue2").innerHTML = `Cost: ${data.cost_in_credits}`
            }
                else{
                    console.log("Error: not found")
                }
 }