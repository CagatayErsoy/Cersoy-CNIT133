function validate() {
    inputValidate();
    checkboxValidate();
    

radiobuttonValidate();
checkselection();
}
function inputValidate(){
    var name=document.getElementById("name").value;
    
    if(name==="" || name===null){
        document.getElementById("msg1").innerHTML="You must enter a first name please";
    }    
    
    
    else 
        document.getElementById("msg1").innerHTML="";
        
}
function checkboxValidate(){
   
        var rateChecked = false;
       
        for (var i=0; i<3; ++i) {
           if (document.getElementById("chekbox[]").checked = true) {
                rateChecked = true;  
                break;
              }
            
        }
       
         if (rateChecked == false) {
            document.getElementById("msg2").innerHTML="You must check one of the boxes";
      
           }
          else    {
           document.getElementById("msg2").innerHTML = " ";
                  }

        
    
    

}
function radiobuttonValidate(){
    var radios = document.getElementsByName("country");
    var formValid = false;

    var i = 0;
    while (!formValid && i < radios.length) {
        if (radios[i].checked) formValid = true;
        i++;        
    }

    if (!formValid) {
        document.getElementById("msg3").innerHTML="You must choose a country please";
    };
   



}
function checkselection(){
    {	
        var selstat = document.forms["main"].elements["selection"].selectedIndex;
    
        if (selstat < 1)  
        {
          document.getElementById("mesage").innerHTML = "You must choose a mail";
        }
        else
        {
          
        }
      }
}
