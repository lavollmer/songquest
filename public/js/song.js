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
        } else {
            alert("failed to add new song, bozo")
        }
    }
}