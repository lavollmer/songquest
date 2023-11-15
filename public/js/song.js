const newSongHandler = async (event) => {
  event.preventDefault();

  const songTitle = document.querySelector("#song-title").value.trim();
  const artist = document.querySelector("#song-artist").value.trim();
  const songLink = document.querySelector("#song-link").value.trim();

  if (songTitle && artist && songLink) {
    const response = await fetch("/api/song.api", {
      method: "POST",
      body: JSON.stringify({ songTitle, artist, songLink }),
      header: {
        "Content-Type": "application/ json",
      },
    })

    if (response.ok) {
      alert("you did the thing!")
      document.location.replace('/profile');
    } else {
      alert("failed to add new song, bozo")
    }
  }
}

document.querySelector('.song-form').addEventListener("submit", loginFormHandler)


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/song.api/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document.querySelector('.deleteSong').addEventListener("delete", loginFormHandler)