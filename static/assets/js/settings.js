let themeSelection = document.getElementById("themeSelection");
function removeTheme() {
    let theme = localStorage.getItem("theme");
    if (theme == "dark") {
        localStorage.setItem("theme", "default");
        window.location.reload();
    } else if (theme == "dark-blue") {
        localStorage.setItem("theme", "default");
        window.location.reload();
    } else if (theme == "dark-red") {
        localStorage.setItem("theme", "default");
        window.location.reload();
    }
}

function googleDrive() {
    let tabIcon = localStorage.setItem('tabIcon', 'https://drive.google.com/favicon.ico');
    document.querySelector('link[rel="icon"]').href = localStorage.getItem("tabIcon");
}

function googleDocs() {
    let tabIcon = localStorage.setItem('tabIcon', './assets/images/docs.webp');
    document.querySelector('link[rel="icon"]').href = localStorage.getItem("tabIcon");
}

function google() {
    let tabIcon = localStorage.setItem('tabIcon', 'https://static-00.iconduck.com/assets.00/google-icon-2048x2048-pks9lbdv.png');
    document.querySelector('link[rel="icon"]').href = localStorage.getItem("tabIcon");
}

function classroom() {
    let tabIcon = localStorage.setItem('tabIcon', 'https://www.gstatic.com/classroom/logo_square_rounded.svg');
    document.querySelector('link[rel="icon"]').href = localStorage.getItem("tabIcon");
}   

function saveTabName() {
    let tabName = document.getElementById("tabName").value;
    localStorage.setItem("tabName", tabName);
    document.title = tabName;
}

document.addEventListener("DOMContentLoaded", function() {
    document.title = localStorage.getItem("tabName");
})
function goAboutBlank() {
    let newWindow = window.open("about:blank", "_blank");
    newWindow.document.write('<iframe src="" + location.href + "" style="width: 100%; height: 100%; border: none;"></iframe>');
}

function toggleAboutBlank() {
    let aboutToggle = localStorage.getItem("aboutToggle", false);
    if (aboutToggle == "true") {
        localStorage.setItem("aboutToggle", false);
        document.getElementById("title").innerHTML = "Spark Web";
    } else {
        localStorage.setItem("aboutToggle", true);
        document.getElementById("title").innerHTML = "About:Blank Cloak";
    }
}

function checkTheme() {
    if (themeSelection.value == "default") {
        localStorage.setItem("theme", "default");
        console.log("default");
    } else if (themeSelection.value == "dark") {
        localStorage.setItem("theme", "dark");
        darkTheme();
        console.log("dark");
    } else if (themeSelection.value == "dark-blue") {
        localStorage.setItem("theme", "dark-blue");
        dark_blue();
        console.log("dark-blue");
    } else if (themeSelection.value == "dark-red") {
        localStorage.setItem("theme", "dark-red")
        dark_red();
        console.log("dark-red");
    }
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector('link[rel="icon"]').href = localStorage.getItem("tabIcon");
});

// function darkTheme() {
//     let styles = document.createElement("style");
//     var containers = document.querySelectorAll('div:not(#splashT):not(.settings-container):not(#custom-menu):not(.container):not(.search):not(.games-container)');
//     containers.forEach(function(container) {
//         container.style.border = "1px solid #fff";
//         container.style.color = "#fff";
//     });
//     var title_container = document.querySelectorAll('.container');
//     title_container.forEach(function(container) {
//         container.style.color = "#fff";
//     })
//     styles.textContent = `
//         body {
//             background: #222;
//             color: #fff;
//         }

//         nav {
//             background: #222;
//             color: #fff;
//             border-bottom: 1px solid #fff;
//         }

//         nav li a {
//             color: #fff;
//         }
//     `;
//     document.body.style.transition = "all 0.32s linear";
//     document.head.appendChild(styles);
// }

// function dark_blue() {
//     let styles = document.createElement("style");
//     var containers = document.querySelectorAll('div:not(#splashT):not(.settings-container):not(#custom-menu):not(.container):not(.search):not(.games-container)');
//     containers.forEach(function(container) {
//         container.style.border = "1px solid #fff";
//         container.style.color = "#fff";
//     });
//     var title_container = document.querySelectorAll('.container');
//     title_container.forEach(function(container) {
//         container.style.color = "#fff";
//     })
//     styles.textContent = `
//         body {
//             background: linear-gradient(to bottom, rgb(16, 52, 82), rgb(9, 34, 55), black);
//             color: #fff;
//         }
//         `;
//     document.body.style.transition = "all 0.32s linear";
//     document.head.appendChild(styles);
// }
// document.addEventListener("DOMContentLoaded", function() {
//     let theme = localStorage.getItem("theme");
//     if (theme == "dark") {
//         darkTheme();
//         themeSelection.value = "dark";
//     } else if (theme == "dark-blue") {
//         dark_blue();
//         themeSelection.value = "dark-blue";
//     } else if (theme == "dark-red") {
//         dark_red();
//         themeSelection.value = "dark-red";
//     }
// });