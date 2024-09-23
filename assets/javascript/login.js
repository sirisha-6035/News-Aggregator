document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Here you can add your authentication logic
    // For this example, we will simply check if both fields are not empty

    if (email && password) {
        // Simulating successful login
        alert('Login successful! Redirecting...');
        
        // Redirect to another page (e.g., dashboard.html)
        window.location.href = "newsproject.html";
    } else {
        alert('Please fill in both fields.');
    }
});
