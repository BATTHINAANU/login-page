document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('loginForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent the form from submitting normally

        // Clear previous errors
        document.getElementById('usernameError').textContent = '';
        document.getElementById('passwordError').textContent = '';

        // Get form values
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        let valid = true;

        // Validate username
        if (username === '') {
            document.getElementById('usernameError').textContent = 'Username is required.';
            valid = false;
        }

        // Validate password
        if (password === '') {
            document.getElementById('passwordError').textContent = 'Password is required.';
            valid = false;
        }

        // If all fields are valid, submit the form (or perform additional actions)
        if (valid) {
            // Example: Display a success message or send the data to a server
            alert('Login successful!');
            // You can add code here to actually submit the form data
            // e.g., send data to the server using fetch or XMLHttpRequest
        }
    });
});
