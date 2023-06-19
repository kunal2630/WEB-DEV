

var hr=0;
var min=0;
var sec=0;
var msec=0;

var state=false;

function start(){

    state=true;
    stopwatch();
    document.getElementById("start").disabled = true;

}


function stop(){

    state=false;
    document.getElementById("start").disabled = false;


}


function reset(){


    state=false;
    document.getElementById("start").disabled = false;  
    hr=0;
    min=0;
    sec=0;
    msec=0;
    

    // WE DID THIS BECAUSE WE WANTED TO RESET CLOCK AS 00 NOT 0 HENCE WE INITIALIZED IT AS STRING("0")

    document.getElementById("micro").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";


}

function stopwatch(){

    if(state==true){

        msec =msec+1;


        if(msec>=99){

            sec +=1;
            msec=0;
        }

        if(sec==60){

            min +=1;
            sec=0;
            
        }

        if(min==60){

            hr =hr+1;
            min=0;
            sec=0;
        }


        

        var hrstring=hr;
        var minstring=min;
        var secstring=sec;
        var msecstring=msec;

        if(hr<10){

            hrstring = "0"+hrstring;
        }

        if(min<10){

            minstring="0"+minstring;
        }

        if(sec<10){

            secstring ="0"+secstring;
        }

        if(msec<10){

            msecstring="0"+msecstring;
        }

        document.getElementById("micro").innerHTML=msecstring;
        document.getElementById("sec").innerHTML=secstring;
        document.getElementById("min").innerHTML=minstring;
        document.getElementById("hr").innerHTML=hrstring;
      

        setTimeout("stopwatch()",10);



    }
}