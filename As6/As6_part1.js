
           
         function roundNumber()
         {
          var errMsg = "Invalid input";
          var regexp = /^(\d{0,})+(\.\d{4,})$/;
          if ( isNaN(document.getElementById("data").value) || (document.getElementById("data").value) == "" )
              {
               document.getElementById("msg").value= errMsg;

              }
        else if ( regexp.test(document.getElementById("data").value)!=1){
            document.getElementById("msg").value= " Number doesn't have 4 decimal positions";
        }
            else {

            var num = parseFloat(document.getElementById("data").value);

               document.getElementById("msg").value=
               "The entered number: " + num +
               "\n rounded to the nearest integer using math round: " + 
                roundToIntegerRound( num ) +
               "\n rounded to the nearest integer using math floor and math round: " + 
                  roundToIntegerRoundSquareRoot( num ) +
               "\n rounded to the nearest tenth using toFixed: " + 
                  roundToTenthsTofixed( num ) +
               "\n rounded to the nearest hundredth using math floor: " + 
                  roundToHundredthsFloor( num ) +
               "\n rounded to the nearest hundredth using math round: " + 
                  roundToThousandthRound( num );
                     
                 }

          }

         function roundToIntegerRound( data )
         {
            return( Math.round( data) );
         }

         function roundToIntegerRoundSquareRoot( data )
         {
            return( Math.round( Math.sqrt(data)) );
         }

         function roundToTenthsTofixed( data )
         {
            return( data.toFixed(1));
         }

         function roundToHundredthsFloor( data )
         {
            return( Math.floor( data * 100 + .5 ) / 100 );
          }
        function roundToThousandthRound( data )
           {
            return( Math.round( data * 1000 ) / 1000 );
           }

        function res() {    
                       document.getElementById("msg").value="";
                       document.getElementById("data").focus();
                       document.getElementById("data").value="";
                       }