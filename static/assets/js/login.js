const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (!username || !password) {
        document.querySelector(".error-message").style.display = "block";
    } else {
        continueLogin();
    }
});

function continueLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if username and password are not empty
    if (!username || !password) {
        document.querySelector(".error-message1").textContent = "Username and password are required.";
        document.querySelector(".error-message1").style.display = "block";
        return;
    }

    fetch("/proccess_login", { // Ensure this URL is correct
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            if (data.status === "success") {
                // Store a dummy token for this example
                sessionStorage.setItem('authToken', Math.random().toString(36).substring(2));
                sessionStorage.setItem('username', username);
                console.log(sessionStorage.getItem('username'));
                sessionStorage.setItem('password', password);
                console.log(sessionStorage.getItem('password'));
                console.log(sessionStorage.getItem('authToken'));
                window.location.href = "/";
            } else {
                document.querySelector(".error-message1").textContent = "Invalid username or password.";
                document.querySelector(".error-message1").style.display = "block";
            }
        })
        .catch((error) => {
            console.error('There was a problem with the fetch operation:', error);
            document.querySelector(".error-message1").textContent = "An error occurred. Please try again.";
            document.querySelector(".error-message1").style.display = "block";
        });
}

