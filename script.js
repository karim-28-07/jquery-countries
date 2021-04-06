

function getCountries() {


    $("#btnShowCountries").click(function() {


        $.ajax(

            {
                url: 'http://localhost:8000/countries',
                success: function (data, status, response) {

                    console.log(data[0]);

                    

                    // $("#country").html(data + "  ");
                    // $("#country1").html(data[0]);
                    // $("#country2").html(data[1]);
                    // $("#country3").html(data[2]);
                    // $("#country4").html(data[3]);
                    // $("#country5").html(data[4]);

                    for (i = 0; i <= data.length -1; i ++){

                        $("#country").data("id")

                    }
                    

                }
            });

    });

}

getCountries()