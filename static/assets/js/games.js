function lunchGame(gameURL) {
    console.log(gameURL);
    let URL1 = window.location.href;
    var extractedPart = URL1.substring(0, URL1.lastIndexOf("/games"));
    console.log(extractedPart + "/worker?url=" + gameURL)
    window.location.href = extractedPart + "/worker?url=" + encodeURIComponent(gameURL);
}