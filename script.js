

function getCountries() {


    $("#btnShowCountries").click(function() {


        $.ajax(

            {
                url: 'http://localhost:8000/countries',
                success: function (data, status, response) {

                    

                    $("#country").html(data);

                }
            });

    });

}

getCountries()