const newSongHandler = async (event) => {
    event.preventDefault();

    const songtitle = document.querySelector("#song-title").value.trim();
    const artist = document.querySelector("#song-artist").value.trim();
    const songLink = document.querySelector("#song-link").value.trim();

   if (songtitle && artist && songLink) {
        const response = await fetch ("/api/song.api", {
            method: "POST",
            body: JSON.stringify({songtitle, artist, songLink}),
            header: {
                "Content-Type": "application/ json",
            },
        })

        if (response.ok) {
            alert("you did the thing!")
            // refresh the song selection on the profile*
            // document.location.replace('/profile');
        } else {
            alert("failed to add new song, bozo")
        }
    }
}


const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/song.api/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        // document.location.replace('/profile');
      } else {
        alert('Failed to delete project');
      }
    }
  };