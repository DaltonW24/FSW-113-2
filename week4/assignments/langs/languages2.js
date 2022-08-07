const lang = 'JavaScript'

// Create an event listener for the submit button that adds all 'input' elements to 
// a single array using the spread operator. Call the chkLang() function, passing in 
// the array as an argument.
    document.getElementById("submit").addEventListener(onclick, chkLang())

    function chkLang(){
        let newArr = [...Arr1, ...Arr2, ...Arr3, ...Arr4, ...Arr5, ...Arr6, ...Arr7, ...Arr8];
        let Arr1 = document.querySelector('#lang0').value;
        let Arr2 = document.querySelector('#lang1').value;
        let Arr3 = document.querySelector('#lang2').value;
        let Arr4 = document.querySelector('#lang3').value;
        let Arr5 = document.querySelector('#lang4').value;
        let Arr6 = document.querySelector('#lang5').value;
        let Arr7 = document.querySelector('#lang6').value;
        let Arr8 = document.querySelector('#lang7').value;
        return newArr;
    }


    // use an ARRAY METHOD (NO LOOOPS!!!!) to check whether the user included 'JavaScript' in their
    // list of languages
    function showSome(){
        document.getElementById("TestResult").some(document.querySelector("#TestResult", "Javascript"))
        if (value == true){
        return "Congrats you know" + lang
        }
            else{
                return "Sorry you don't know" + lang
            }
    }
