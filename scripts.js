document.addEventListener("DOMContentLoaded", function() {
    const four = document.getElementById("4");
    const screen = document.getElementById("screen");

    four.addEventListener("click", function() {
        screen.innerText = "Hello, World!";
    });
});
