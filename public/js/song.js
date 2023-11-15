const newSongHandler = async (event) => {
  event.preventDefault();

  const songTitle = document.querySelector("#song-title").value.trim();
  const artist = document.querySelector("#song-artist").value.trim();
  const songLink = document.querySelector("#song-link").value.trim();

  if (songTitle && artist && songLink) {
    const response = await fetch("/api/song", {
      method: "POST",
      body: JSON.stringify( {songTitle, artist, songLink }),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      console.log("you did the thing!")
      document.location.replace('/profile');
    } else {
      console.log("failed to add new song, bozo")
    }
  }
}

document.querySelector('.createSong').addEventListener("click", newSongHandler)


const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');
    console.log(id)
    
    const response = await fetch(`/api/song/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to delete project');
    }
  }
};

document.querySelector('.deleteSong').addEventListener("click", delButtonHandler)

const newCommentHandler = async (event) => {
  event.preventDefault();

  const content = document.querySelector("#comment-content").value.trim();
  const song_id = document.querySelector("#comment-content").value.trim();

  if (content) {
    const song_id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/comment/${song_id}`, {
      method: "POST",
      body: JSON.stringify( {content} ),
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (response.ok) {
      console.log("you did the thing!")
      document.location.replace('/profile');
    } else {
      console.log("failed to add new song, bozo")
    }
  }
}

document.querySelector('.newComment').addEventListener("click", newCommentHandler)