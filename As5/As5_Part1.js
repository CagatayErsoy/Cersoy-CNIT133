function validate() {
    inputValidate();
    checkboxValidate();
    radiobuttonValidate();
    checkselection();
    if(inputValidate()==1 && checkboxValidate()==1 && radiobuttonValidate()==1&&checkselection()==1){
        window.location.replace("As5_Part1_2.html");
    }
}

function inputValidate(){
    var name=document.getElementById("name").value;
    
    if(name=="" || name==null){
        document.getElementById("msg1").innerHTML="You must enter a movie name please";
        return false;
    }    
    
    
    else 
        document.getElementById("msg1").innerHTML="";
        return true;
}
function checkboxValidate(){
            
         if (document.getElementById("checkbox1").checked==1 ||document.getElementById("checkbox2").checked==1 ||document.getElementById("checkbox3").checked==1 ) {
            
            document.getElementById("msg2").innerHTML = " ";
            return true;
           }
          else    {
            document.getElementById("msg2").innerHTML="You must check at least one of the boxes";
                 
        return false;}
                
        
    

}
function radiobuttonValidate(){
    var radios = document.getElementsByName("Yesno");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;    
           
    }

    if (!formValid) {
        document.getElementById("msg3").innerHTML="You must choose one answer please";
        return false;
    }
    else {
        document.getElementById("msg3").innerHTML="";
        return true;
    }
   



}
function checkselection(){
    {	
        var selstat = document.forms["main"].elements["selection"].selectedIndex;
    
        if (selstat < 1)  
        {
          document.getElementById("msg4").innerHTML = "You must choose a e-mail";
          return false;
        }
        else
        {
            document.getElementById("msg4").innerHTML = "";
            return true;
        }
      }
}
