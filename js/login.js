$(document).ready(function() {
    var $email= $("#inputemail"); //poner comillas simple
    var $password = $("#password");

// asociando eventos a los inputs
    $email.on("input",function(event){
        console.log(event.target.value);
        console.log($(this).val()); // == console.log($email.val()); 
        // console.log($email.val()); 
        var PATERNEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
        console.log(PATERNEMAIL.test($(this).val()));
    });

    $password.on("input",function(){
       if($(this).val().length >= 6){
           alert("cumple");
       } else {
           alert("no cumple");
       }
    });



    
}); //END FUNCTION READY ESTO ES DE SIGN UP

