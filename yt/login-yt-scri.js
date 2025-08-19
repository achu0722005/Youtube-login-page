function login() {
    const correctemail = 'akshayprocode@gmail.com'
    const correctpassword = '12345'

    let email = document.getElementById("email").value
    let password = document.getElementById("password").value

    if (email == correctemail && password == correctpassword) {
        alert("login sucessfull")
        window.location.href="index.html"
    } else {
        alert("invalid credential")
    }
}
