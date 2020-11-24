function search()
{
   var count=0;
   var charForSearch=document.getElementById("charSearch").value;
  
   
   var key=charForSearch.toLowerCase().charAt( 0 );
   
    var key=key.toLowerCase();

   var stringToSearch=document.getElementById("inputArea").value.toLowerCase();
  if(key===''||key===null || stringToSearch==="" || stringToSearch===null){
    alert("please enter data for search")
  }
 else{
   
    
    for (i=0; i < stringToSearch.length; i++)
            {

           if (stringToSearch.charAt(i) == key)
                    count++;     
            }         
          
   if ( count == 0 ){
    var char = document.getElementById("charSearch").value;

    var myText = "<html>\n";
    myText += "<head>\n";
    myText += "<title>Not Found Window</title>\n";
    myText += "</head>\n";
    myText += "<body>\n";
    myText += "<div style='margin:0 auto;'>\n";
    myText += "<p><strong>"+char+" character not found in text string!</strong></p>\n";
    myText += "<input type='button' value='Close Window' onclick='window.close()'>\n";
    myText += "</div>\n";
    myText += "</body>\n";
    myText += "</html>";
    
    var newWindow = window.open("", "new_window",
    "top=1,left=1,width=300,height=100"); 

    newWindow.focus();
      
    newWindow.document.write(myText);
   
    newWindow.document.close();
      
   document.getElementById("results").value="";
      document.getElementById("charSearch").value="";
      document.getElementById("inputArea").value="";
   }
   else
      document.getElementById("results").value=count + 
         " occurrence(s) of " + key + " found";
}
}
function res() {    
    document.getElementById("charSearch").value="";
    document.getElementById("inputArea").value="";
    document.getElementById("results").value="";
    
    }
