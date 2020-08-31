// https://api.lyrics.ovh/suggest/summer
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
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            const element = data[i];
            console.log(element);
        }
    });
}

// show song report
// function showLyricsReport(data) {
//     // console.log(data);
//     for (let i = 0; i < data.length; i++) {
//         const element = data[i];
//         console.log(element);
        
//     }
// }

// fetch('https://api.lyrics.ovh/suggest/summer')
//   .then(response => response.json())
//   .then(data => console.log(data))