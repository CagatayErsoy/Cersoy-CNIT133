
           
         function roundNumber()
         {
          var errMsg = "Invalid input";
          var regexp = /^(\d{0,})+(\.\d{4,})?$/;
          if ( isNaN(document.getElementById("data").value) || (document.getElementById("data").value) == "" )
              {
               document.getElementById("msg").value= errMsg;

              }
        else if ( regexp.test(document.getElementById("data").value)!=1){
            document.getElementById("msg").value= " not 4 digit";
        }
            else {

            var num = parseFloat(document.getElementById("data").value);

               document.getElementById("msg").value=
               "The entered number: " + num +
               "\n rounded to the nearest integer using math round: " + 
                  roundToIntegerRound( num ) +
               "\n rounded to the nearest integer using math floor: " + 
                  roundToIntegerFloor( num ) +
               "\n rounded to the nearest tenth using toFixed: " + 
                  roundToTenthsTofixed( num ) +
               "\n rounded to the nearest hundredth using math floor: " + 
                  roundToHundredthsFloor( num ) +
               "\n rounded to the nearest hundredth using math round: " + 
                  roundToHundredthsRound( num );
                     
                 }

          }

         function roundToIntegerRound( data )
         {
            return( Math.round( data) );
         }

         function roundToIntegerFloor( data )
         {
            return( Math.floor( data + .5 ) );
         }

         function roundToTenthsTofixed( data )
         {
            return( data.toFixed(1));
         }

         function roundToHundredthsFloor( data )
         {
            return( Math.floor( data * 100 + .5 ) / 100 );
          }
        function roundToHundredthsRound( data )
           {
            return( Math.round( data * 100 ) / 100 );
           }

        function res() {    
                       document.getElementById("msg").innerHTML="";
                       document.getElementById("data").focus();
                       }