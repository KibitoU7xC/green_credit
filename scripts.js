document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var email = document.getElementById("email").value;
    
    if (email) {
        // Display success message
        document.getElementById("success-message").classList.remove("hidden");

        // Optionally clear the input field
        document.getElementById("email").value = "";
    }
});
