// https://api.lyrics.ovh/suggest/baby
// https://api.lyrics.ovh/v1/artist/title

const searchBox = document.getElementById("search-box").addEventListener("click", function () {
    const inputBox = document.getElementById("input-box");
    // alert(inputBox.value);
    getLyricsReport(inputBox.value);
});

//Get song report
function getLyricsReport(input) {
    fetch(`https://api.lyrics.ovh/suggest/${input}`)
        .then(res => res.json())
        .then(showLyricsReport)
}

// show song report
function showLyricsReport(data) {
    // console.log(data);
    const musicDetails = document.getElementById("music-details");
    const arrData = data.data;
    for (let i = 0; i < arrData.length; i++) {
        const music = arrData[i];
        console.log(music);
        const p = document.createElement("p");
        p.innerHTML = `
            <div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-9">
                <h3 class="lyrics-name">${music.album.title}</h3>
                <p class="author lead">Album by <span>${music.artist.name}</span></span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyrics(${music.artist.name}, ${music.album.title})" class="btn btn-success">Get Lyrics</button>
            </div>
            </div>
        `;
        musicDetails.appendChild(p);
    }
}

// music lyrics
function getLyrics(artist, title) {
    fetch(`https://api.lyrics.ovh/v1/${music.artist.name}/${music.album.title}`)
        .then(res => res.json())
        .then(data => console.log(data))
}
