//____________________________
//Program   : RandomNumbers.js
//Author    : Ben Morgan
//Date      : 6/10/2014
//Purpose   : Create random number generator that will create chunks of 100 random numbers for analysis.
//Updated   : 
//Last Run  :   
//____________________________

function randomNumbers() {
    var rnText = "";
    var rnQty = document.getElementById("Quantity").value;
    //check entered quantity and enforce maximum of 100,000 numbers
    if (rnQty > 100000)
    {
        rnQty = 100000;
        rnText = "This site will generate a maximum of 100,000 random numbers at a time. <br>";
    }
    //create chunk of random numbers followed by newline
    for (var i = 0; i < rnQty; i++) 
    {
        //Math.random generates random numbers between 0 and 1.   
        rnText += Math.random() + "<br>";
    }
    //assign to page
    document.getElementById("Rnd").innerHTML = rnText;
};