const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector(".user").value
  const email = document.querySelector(".email-signup").value
  const password = document.querySelector(".pass").value

  if (username && email && password) {
    const response = await fetch('/api/users/signup', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert("Failed to signup. Please try again.");
    }
  }
};

document.querySelector('.signup-form').addEventListener("submit", signupFormHandler)