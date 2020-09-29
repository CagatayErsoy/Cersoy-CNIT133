function total(){
    var homAv,midEx,finEx,prtp ;
  
    var errMsg = "You should enter all grades in numbers";
  
    
  
       homAv = document.getElementById("Homework_Average").value;
        midEx = document.getElementById("Mid-term_Exam").value;
        
       
       finEx = document.getElementById("Final_Exam").value;
        prtp= document.getElementById("Participation").value;
        
       
function validate(number){
   if ( isNaN(number) || number=="")
        {
        return false;   
        }
  
    else {
        return true;
  
}

}

function main(a,b,c,d){
    var finAv;
    if(validate(a)===false || validate(b)===false || validate(c)===false || validate(d)===false){
        document.getElementById("Message").value = errMsg;
        document.getElementById("Final_Average").value = "";
        document.getElementById("Final_note").value = "";
        
    }
    else{

        finAv = (0.5 * homAv) + (0.2 * midEx) + (0.2 * finEx) + (0.1 * prtp)
        var final =Math.round(finAv);
        
        
        if(final>=90){
            document.getElementById("Final_note").value = "A";
            document.getElementById("Message").value = "You passed class";
        }
        else if(final<90 && final>=80){
            document.getElementById("Final_note").value = "B";
            document.getElementById("Message").value = "You passed class";
        }
        else if(final<80 && final>=70){
            document.getElementById("Final_note").value = "C";
            document.getElementById("Message").value = "You passed class";
        }
        else if(final<70 && final>=60){
            document.getElementById("Final_note").value = "D";
            document.getElementById("Message").value = "Student must retake the course";
        }
        else if( final<60){
            document.getElementById("Final_note").value = "F";
            document.getElementById("Message").value = "Student must retake the course";
        }
        document.getElementById("Final_Average").value = final;
        
        
    }
}
    main(homAv,midEx,finEx,prtp);
    
    
}

function res(){
    
    document.getElementById("Homework_Average").value="";
    document.getElementById("Mid-term_Exam").value="";
    document.getElementById("Final_Exam").value="";
    document.getElementById("Participation").value="";
     document.getElementById("Final_note").value = "";
    document.getElementById("Message").value = "";
    document.getElementById("Final_Average").value = "";

}
