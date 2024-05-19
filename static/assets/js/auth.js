document.addEventListener("DOMContentLoaded", () => {
    // Check if authToken exists in sessionStorage
    const authToken = sessionStorage.getItem('authToken');
    if (!authToken) {
        // Redirect to login page if token is not found
        window.location.href = "/login";
    } else {
        // Log the token to the console if it exists
        console.log("Auth Token:", authToken);
    }

    document.querySelector('link[rel="icon"]').href = localStorage.getItem("tabIcon");
    document.title = localStorage.getItem("tabName");
});
