function names(){
    
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const date=document.getElementById("date").value;
    const time=document.getElementById("time").value;
    
    

    if (name == "" ){
        alert(' \n\n\nPlease complete the form!');
    } 
    else if (email == ""){
        alert(' \n\n\nPlease complete the form!');
    }
    else if (date == ""){
        alert(' \n\n\nPlease complete the form!');
    }
    else if (time == ""){
        alert(' \n\n\nPlease complete the form!');
    }
   
    else {
        alert(' Welcome to KD Salon! ' + name + 
  ' \n\nYour Appointment Request of:' + 
  ' \nDate: ' + date +
  ' \nTime: ' + time +
  ' \nhas been APPROVED! '  +

  '\n\nNote: PLEASE SCREENSHOT THIS MESSAGE! and show it to the facilitator\n Thank You and God Bless.'
    );
    }
    
    if(time>="9:00" && time<="19:00"){
        alert(' Welcome to KD Salon! ' + name + 
  ' \n\nYour Appointment Request of:' + 
  ' \nDate: ' + date +
  ' \nTime: ' + time +
  ' \nhas been APPROVED! '  +

  '\n\nNote: PLEASE SCREENSHOT THIS MESSAGE! and show it to the facilitator\n Thank You and God Bless.'
    );
    }

    else if(time>="19:00"){
     alert(' Sorry we are close at that moment! ');
    }

    else{
        alert(' \n\n\nPlease complete the form!');
    }


    
}


