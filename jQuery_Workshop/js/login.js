$(document).ready(
  () => {
    $('#login-button').on('click', function () {
      var username = $('input[type="text"]').val();
      var password = $('input[type="password"]').val();
      if (password == '') {
        alert("enter password");
      }
      if (username == '') {
        alert("enter username");
      }
      else {
        $.ajax({
          url: "http://locolhost:3000/users",
          type: 'GET',
          data: {
            "username": username,
            "password": password
          },
          success: (x) => {
            alert("Welcome " + username + " !");
            console.log(x);
            window.location = "http://127.0.0.1:5500/html/register.html"
          }
        })
      }
    }
    )
  }
)



