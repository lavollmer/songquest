const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#user").value
  const password = document.querySelector("#pass").value

  if (username && password) {
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/profile'); // once profile is establised
    } else {
      alert("Failed to log in. Please try again.");
    }
  }
};

document.querySelector('.login-form').addEventListener("submit", loginFormHandler)