


function n(){
    var q = prompt("would you like to draw to draw a number? if yes press y.")

        
}


function grace(){ 
    do{
        var CPRan = Math.floor(Math.random()* 10 ) + 1;
            alert(`The computer will now draw a card.`);
         
            var CPTotal = CPTotal + CPRan
    
            alert(`The computer have a total of ${CPTotal}`);
    
            
        }while (CPTotal < 16);
}

function human() { 
    do{
        var USRan = Math.floor(Math.random()* 10 ) + 1;

        var USTotal = USTotal + USRan
        alert(`human number is ${USRan}`)
        alert(`The human has a total of ${USTotal}`);

        if (USTotal > 20) {
            break;
        }
        
         var desicioin = prompt(`human do you want to another card? if yes press y`)
        
    } while ((USTotal < 20 ) && (desicioin == "y"));
}
    
function results() {
    do{
    if ( ( CPTotal < USTotal) && ( CPTotal <= 20) && (USTotal <= 20) ){
        alert(`You have won`);
    }else if ( (CPTotal > USTotal ) && ( CPTotal <= 20) && ( USTotal <=20) ){
    alert( `the computer has won`);
    } else if ( ( CPTotal = USTotal) && ( CPTotal <= 20) && ( USTotal <= 20) ) {
        alert(` you've tied with the computer `);
    }
    alert(`The computer as a total of ${SPTotal}\n\n\n You have a total of ${USTotal} `)
    var q2 = (`do you want to play again? Press y to play another game`)

    }while (q2 == "y")
}

function program() {
    n()
    grace()
    human()
    results()
}
    
    if (q == "y") {
        program() // recursive function
    }else{
        alert("Thank you for playing")
        }    