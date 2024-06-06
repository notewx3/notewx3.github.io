function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.right === "0px") {
        menu.style.right = "-250px";
    } else {
        menu.style.right = "0px";
    }
}

function showMessage() {
    var menu = document.getElementById("menu");
    var message = document.getElementById("message");
    menu.style.right = "-250px";
    message.style.display = "block";
    setTimeout(function() {
        message.style.display = "none";
    }, 2000);
}
