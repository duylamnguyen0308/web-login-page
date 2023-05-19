
async function login(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let userinfor = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            username: username,
            password: password,
            // expiresInMins: 60, // optional
        })
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            return data;
        });
    console.log(userinfor.token);
    localStorage.setItem("login token", userinfor.token);
    if (userinfor.token.length !==0) {
        location.assign("index.html");
    }
}