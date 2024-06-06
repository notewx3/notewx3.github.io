//menu改block01

function toggleMenu() {
    var menu = document.getElementById("menu"); // 獲取菜單元素
    var hamburger = document.querySelector(".hamburger"); // 獲取漢堡按鈕
    if (menu.style.right === "0px") {
        menu.style.right = "-250px"; // 如果菜單欄已經顯示，則將其滑回屏幕右側外
        hamburger.style.display = "block"; // 顯示漢堡按鈕
    } else {
        menu.style.right = "0px"; // 如果菜單欄隱藏，則將其滑出到屏幕內
        hamburger.style.display = "none"; // 隱藏漢堡按鈕
    }
}

function showMessage() {
    var menu = document.getElementById("menu"); // 獲取菜單元素
    var message = document.getElementById("message"); // 獲取顯示信息的元素
    var hamburger = document.querySelector(".hamburger"); // 獲取漢堡按鈕
    menu.style.right = "-250px"; // 將菜單欄滑回屏幕右側外
    message.style.display = "block"; // 顯示信息
    hamburger.style.display = "block"; // 顯示漢堡按鈕
    setTimeout(function() {
        message.style.display = "none"; // 設置一個兩秒後自動隱藏信息的計時器
    }, 2000);
}

