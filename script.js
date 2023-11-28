document.addEventListener('DOMContentLoaded', function () {
    lightbox.option({
        'resizeDuration': 200,
        'wrapAround': true
    });
});

function showDetails(artNumber) {
    // Retrieve details for the specific art piece (replace with your data)
    const details = getArtDetails(artNumber);

    // Log details to console for demonstration (you can remove this line)
    console.log(details);

    // You can customize how you want to display the details, e.g., alert, console.log, etc.
    alert(`
    Art Title: ${details.title}
    Positive Prompt: ${details.positivePrompt}
    Negative Prompt: ${details.negativePrompt}
    Seed: ${details.seed}
    Steps: ${details.steps}
    CFG Scale: ${details.cfgScale}
    `);
}

// Replace this function with your data retrieval logic
function getArtDetails(artNumber) {
    // Set details for each artwork directly
    if (artNumber === 1) {
        return {
            title: 'Art Title 1',
            positivePrompt: 'm',
            negativePrompt: 'Negative Prompt for Art 1',
            seed: 'Seed for Art 1',
            steps: 'Steps for Art 1',
            cfgScale: 'CFG Scale for Art 1'
        };
    } else if (artNumber === 2) {
        return {
            title: 'Art Title 2',
            positivePrompt: 'Positive Prompt for Art 2',
            negativePrompt: 'Negative Prompt for Art 2',
            seed: 'Seed for Art 2',
            steps: 'Steps for Art 2',
            cfgScale: 'CFG Scale for Art 2'
        };
    }
    // Add more conditions for additional artworks

    // Default case if artNumber doesn't match any condition
    return {
        title: 'Art Title Default',
        positivePrompt: 'Positive Prompt Default',
        negativePrompt: 'Negative Prompt Default',
        seed: 'Seed Default',
        steps: 'Steps Default',
        cfgScale: 'CFG Scale Default'
    };
}
function checkPassword() {
    const enteredPassword = document.getElementById('password').value;

    // Replace 'yourPassword' with your actual password
    if (enteredPassword === '1aravin234') {
        // Correct password, show the content
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('gallery').style.display = 'block';
    } else {
        // Incorrect password, show an alert or handle it as needed
        alert('Oops Wrong Password. Ask To The Owner To Get New Password To Enter!');
    }
}
// Existing JavaScript remains unchanged

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.querySelector('.eye-icon');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        eyeIcon.innerHTML = '&#128064;'; // Closed eye icon
    } else {
        passwordInput.type = 'password';
        eyeIcon.innerHTML = '&#128065;'; // Open eye icon
    }
}
