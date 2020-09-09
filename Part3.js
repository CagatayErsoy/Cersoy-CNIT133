function calculate(){
    
    var numb1=0,numb2=0,numb3=0,numb4=0,numb5=0,n1,n2,n3,n4,n5,positive=0,negative=0,zero=0;
    numb1=document.getElementById("first_num").value
    numb2=document.getElementById("second_num").value
    numb3=document.getElementById("third_num").value
    numb4=document.getElementById("forth_num").value
    numb5=document.getElementById("fifth_num").value
    
    if(isNaN(numb1)||isNaN(numb2)||isNaN(numb3)||isNaN(numb4)||isNaN(numb5)) {
        document.getElementById("results").value=("You did't enter a number for at least one textbox \nPlease enter a number for empty textbox/textboxes")
    }
    else {
        
        n1=parseInt(numb1);
        n2=parseInt(numb2);
        n3=parseInt(numb3);
        n4=parseInt(numb4);
        n5=parseInt(numb5);
        
        // number 1//
        if(n1>0)
            positive++;
        else if (n1==0)
            zero++;
        else if (n1<0)
            negative++;
        // number 2//
        if(n2>0)
            positive++;
        else if (n2==0)
            zero++;
        else if (n2<0)
            negative++;
        // number 3//
        if(n3>0)
            positive++;
        else if (n3==0)
            zero++;
        else if (n3<0)
            negative++;
        // number 4//
        if(n4>0)
            positive++;
        else if (n4==0)
            zero++;
        else if (n4<0)
            negative++;
        // number 5//
        if(n5>0)
            positive++;
        else if (n5==0)
            zero++;
        else if (n5<0)
            negative++;
           
        //displaying results//
        document.getElementById("results").value=("you entered \n"+positive+" positive number \n"+negative+" negative number \n"+zero+" zero \nclick to reset button for doing again");
        
    }


}
function res(){
    document.getElementById("first_num").value="";
    document.getElementById("second_num").value="";
    document.getElementById("third_num").value="";
    document.getElementById("results").value="";
    
    }

    