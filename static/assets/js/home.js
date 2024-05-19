let splashT = document.getElementById("splashT");
let text = [
    "Right-Click to access more features",
      "Set a custom background in settings.",
      "About:Blank Cloak is highly recommended",
      "Finally, an actual site unblocker that works fast!",
      "Do not share this link with anyone.",
      "© Copyright 2024 Spark Web. All Rights Reserved.",
      "Customize Spark by going to Settings > Themes",
      "Want more links? Our Discord provides tons of links!"
];

function splashText() {
    splashT.innerHTML = text[Math.floor(Math.random() * text.length)];
}
splashText();

document.addEventListener('contextmenu', function(e) {
    // Prevent the default context menu
    e.preventDefault();
    
    // Show the custom menu
    var customMenu = document.getElementById('custom-menu');
    customMenu.style.display = 'block';
    customMenu.style.left = e.pageX + 'px';
    customMenu.style.top = e.pageY + 'px';
});

// Hide the custom menu when clicking outside of it
document.addEventListener('click', function(e) {
    var customMenu = document.getElementById('custom-menu');
    customMenu.style.display = 'none';
});