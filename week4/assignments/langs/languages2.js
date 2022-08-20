const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
    document.getElementById("submit").addEventListener('click', chkLang)

    function chkLang(){
        const list = document.querySelectorAll("input")
        const arr = Array.from(list)
        showSome(arr) 
    } 
    


    // use an ARRAY METHOD (NO LOOOPS!!!!) to check whether the user included 'JavaScript' in their
    // list of languages
    function showSome(arr){
        const answer = arr.some(language => language.value.toLowerCase() == lang.toLowerCase());
            if(answer){
                console.log("Congrats you know JavaScript")
            }
                else{
                    console.log("Sorry you do not know JavaScript")
                }
    }
 