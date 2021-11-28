
$(document).ready(function() {





let email = document.getElementById("email");
var count =0;

$('input[type=password]').keyup(function(event) {
    var passwordA = $(this).val();
    var passwordD = $(this).val();

    var pw1 = document.getElementById("passwordA");
    var pw2 = document.getElementById("passwordD");

        if (passwordA.length >=8) {
            $('#C').removeClass('invalid').addClass('valid');
        }
        else  {
            $('#C').removeClass('valid').addClass('invalid');
            
        }
        if (passwordA.charCodeAt(0) >=65 && passwordA.charCodeAt(0) <=90 || passwordA.charCodeAt(0) >=97 && passwordA.charCodeAt(0) <=122) {
            $('#A').removeClass('invalid').addClass('valid');
        }
        else  {
            $('#A').removeClass('valid').addClass('invalid');
            
        }
        

    upper = /[A-Z]/;
    lower = /[a-z]/;

    if (upper.test(passwordA)) {
        $('#D').removeClass('invalid').addClass('valid');
        }
        else  {
            $('#D').removeClass('valid').addClass('invalid');
    }

    var key = event.keyCode || event.charCode;
    if( key == 8  || key == 36 && passwordA.charCodeAt(passwordA.length) >=65 || passwordA.charCodeAt(passwordA.length) <=90){
    	count-=1;
    }

    if (lower.test(passwordA) || upper.test(passwordA)) {
        count+=1;
    }
    
    if (count < 3) {
        $('#B').removeClass('valid').addClass('invalid');
    }
    else if (count >= 3) {
        $('#B').removeClass('invalid').addClass('valid');
    }




    words = /[\W]/;
    score = /[_]/;
    
    if (words.test(passwordA) || score.test(passwordA)) {
        $('#E').removeClass('invalid').addClass('valid');
    }
    else {
        $('#E').removeClass('valid').addClass('invalid');
    }



    




    




    
    



    })

    $('#icey').submit(function() {
        if($('#A').hasClass('invalid') || $('#B').hasClass('invalid') || $('#C').hasClass('invalid') || $('#D').hasClass('invalid') || $('#E').hasClass('invalid')){
            alert('Your password does not meet the requirements');
            return false;
        }
    });
});




    
    
$(document).ready(function () {
    $('input[type=text]').keyup(function() {

        var passwordA = getElementById("passwordA");
    var passwordD = getElementById("passwordD");
    if (passwordA.val() != passwordD.val()) {
        $('#1').removeClass('valid').addClass('invalid');
    }else {
    $('#1').removeClass('invalid').addClass('valid');
    }




    





    })
});
