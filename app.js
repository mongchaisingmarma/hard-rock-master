// https://api.lyrics.ovh/suggest/baby
// https://api.lyrics.ovh/v1/artist/title

const searchBox = document.getElementById("search-box").addEventListener("click", function () {
    const inputBox = document.getElementById("input-box");
    // alert(inputBox.value);
    getLyricsReport(inputBox.value);
});

//Get song report
function getLyricsReport() {
    fetch("https://api.lyrics.ovh/suggest/baby")
    .then(data => data.json())
    .then(showLyricsReport)
}

// show song report
function showLyricsReport(data) {
    // console.log(data);
    for (let i = 0; i < data.length; i++) {
        const lyrics = data[i];
        console.log(lyrics);
    }
}

// fetch('https://api.lyrics.ovh/suggest/baby')
//   .then(response => response.json())
//   .then(data => console.log(data))