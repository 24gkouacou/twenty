



function Grace() {
    alert ("at the end")
}


function program(){
    Grace()





    var q = prompt("fi you want to play press b.")
    if (q == "b") {
        program() // recursive function
    }else{
        alert("Thank you for playing")
        }
        
    }

