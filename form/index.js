// BUT SUBMITTING THE FORM FORM VALIDATION IS DONE SO THAT IS NOT DIRECTLY SENT TO SERVER , BEFORE SUBMITTING FORM CREDENTIAL IS CHECKED ON THE CLIENT SIDE FOR SOME PROPERTIES LIKE IS USERNAME FEILD IS EMPTY,IS PASSWORD FEILD IS EMPTY ,IS USERNAME IS IN CORRECT FORMAT 

let username=document.getElementById("username");
    let password=document.getElementById("password");
    let usernameflag=true;
    let passflag=true;

function validation(){


    

    if(username.value==""){

        document.getElementById("usernameerror").innerHTML="Username is empty";
        usernameflag=false;
    }
    else if(username.value.length<3){

        document.getElementById("usernameerror").innerHTML="Username requires min 3 characters ";
        usernameflag=false;

    }

    else{

        document.getElementById("usernameerror").innerHTML="";
        usernameflag=true;
    }


    if(password.value==""){

        document.getElementById("passworderror").innerHTML="Password is empty";
        passflag=false;

    
    }
    else{

        document.getElementById("passworderror").innerHTML="";
        passflag=true;
    }

    return (usernameflag && passflag);
}