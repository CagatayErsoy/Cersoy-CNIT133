function calculate(){
    
    var numb1=0,numb2=0,numb3=0;
    numb1=document.getElementById("first_num").value
    numb2=document.getElementById("second_num").value
    numb3=document.getElementById("third_num").value
    alert("here")
    if(isNaN(numb1)||isNaN(numb2)||isNaN(numb3)) {
        document.getElementById("results").value=("You did't enter a number for at least one number,Please enter a number fot empty number/numbers")
    }
    
    
    

}
function res(){
    document.getElementById("first_num").value="";
    document.getElementById("second_num").value="";
    document.getElementById("third_num").value="";
    document.getElementById("results").value="";
    
    }