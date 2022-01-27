$(document).ready(
    () => {
        $('#register-button').on('click', function () {
            var formdata = {
                "firstname": $('input[type="text"]').val(),
                "lastname": $('input[type="text"]').val(),
                "username": $('input[type="text"]').val(),
                "password": $('input[type="password"]').val(),
                "address": $('input[type="address"]').val(),
                "pincode": $('input[type="pincode"]').val(),
            }

                $.ajax({
                    url: "http://locolhost:3000/users",
                    type: 'POST',
                    data: formdata,
                    success: () => {
                        alert("User added successfuly ");
                    }
                })
            
        }
        )
    }
)