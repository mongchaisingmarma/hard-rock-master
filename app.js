// https://api.lyrics.ovh/suggest/${input}
// https://api.lyrics.ovh/v1/artist/title

const searchBox = document.getElementById("search-box").addEventListener("click", function () {
    const inputBox = document.getElementById("input-box");
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
    const musicDetails = document.getElementById("music-details");
    let arrData = data.data;
     arrData = arrData.slice(0, 10);
    musicDetails.innerHTML = "";
    for (let i = 0; i < arrData.length; i++) {
        const music = arrData[i];
        let title  = music.title;
        let artist = music.artist.name;
        const p = document.createElement("p");
        p.innerHTML = `
        <div class="search-result col-md-8 mx-auto py-4">
            <div class="single-result row align-items-center my-3 p-3">
            <div class="col-md-9">
                <h3 class="lyrics-name">${title}</h3>
                <p class="author lead">Album by <span>${artist}</span></span></p>
            </div>
            <div class="col-md-3 text-md-right text-center">
                <button onclick="getLyrics('${artist}', '${title}')" class="btn btn-success">Get Lyrics</button>
            </div>
            </div>
        </div>
        `;
        musicDetails.appendChild(p);
    }
}

// music lyrics
function getLyrics(artist, title) {
    fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)
        .then(res => res.json())
        .then(data => {
            const arrLyrics = data.lyrics;
            if (arrLyrics === undefined) {
                alert("Lyrics is not found");
            }
            else{const lyrics = document.getElementById("lyrics");
            const p = document.createElement("p");
            p.innerText = arrLyrics;
            lyrics.appendChild(p);}
            
        })
}
