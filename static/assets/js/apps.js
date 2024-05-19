function lunchApp(AppURL) {
    console.log(AppURL);
    let URL1 = window.location.href;
    var extractedPart = URL1.substring(0, URL1.lastIndexOf("/apps"));
    console.log(extractedPart + "/worker?url=" + AppURL)
    window.location.href = extractedPart + "/worker?url=" + encodeURIComponent(AppURL);
}