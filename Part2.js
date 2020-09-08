function calculate(){
    
    var numb1=0,numb2=0,numb3=0,biggest,smallest,sum,average;
    numb1=document.getElementById("first_num").value
    numb2=document.getElementById("second_num").value
    numb3=document.getElementById("third_num").value
    
    if(isNaN(numb1)||isNaN(numb2)||isNaN(numb3)) {
        document.getElementById("results").value=("You did't enter a number for at least one number,Please enter a number fot empty number/numbers")
    }
    else {
        document.getElementById("results").value=null;
        sum=parseInt(numb1)+parseInt(numb2)+parseInt(numb3);
        //I added toFixed to take an integer result//
        average=(sum/3).toFixed(0);
        smallest=Math.min(numb1,numb2,numb3);
        biggest=Math.max(numb1,numb2,numb3);
        document.getElementById("results").value=("sum="+sum+"\n average="+average+ "\n Smallest number is "+smallest+"\n Biggest number is "+biggest);
    
    }


}
function res(){
    document.getElementById("first_num").value="";
    document.getElementById("second_num").value="";
    document.getElementById("third_num").value="";
    document.getElementById("results").value="";
    
    }

    