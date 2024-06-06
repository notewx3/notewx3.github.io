
//menu改block01

function toggleMenu() {
    var block01 = document.getElementById("block01"); // 獲取菜單元素
    var hamburger = document.querySelector(".hamburger"); // 獲取漢堡按鈕
    if (block01.style.right === "0px") {
        block01.style.right = "-250px"; // 如果菜單欄已經顯示，則將其滑回屏幕右側外
        hamburger.style.display = "block"; // 顯示漢堡按鈕
    } else {
        block01.style.right = "0px"; // 如果菜單欄隱藏，則將其滑出到屏幕內
        hamburger.style.display = "none"; // 隱藏漢堡按鈕
    }
}

function showMessage() {
    var block01 = document.getElementById("block01"); // 獲取菜單元素
    var message = document.getElementById("message"); // 獲取顯示信息的元素
    var hamburger = document.querySelector(".hamburger"); // 獲取漢堡按鈕
    block01.style.right = "-250px"; // 將菜單欄滑回屏幕右側外
    message.style.display = "block"; // 顯示信息
    hamburger.style.display = "block"; // 顯示漢堡按鈕
    setTimeout(function() {
        message.style.display = "none"; // 設置一個兩秒後自動隱藏信息的計時器
    }, 2000);
}

document.getElementById('show-dialog').addEventListener('click', function() {
    console.log('觸發按鈕');
    const dialog = document.getElementById('dialog');
    dialog.classList.remove('block_say', 'bounce-out');
//hidden改block_say
    dialog.classList.add('bounce-in');

    setTimeout(function() {
        dialog.classList.remove('bounce-in');
        dialog.classList.add('bounce-out');
        setTimeout(function() {
            dialog.classList.add('block_say');
        }, 500); // Wait for the bounce-out animation to complete
    }, 3000); // Show the dialog for 3 seconds
});

//從html移動過來了

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

let say1_arr = ["早安111", "藍色的文字內容2222", "藍色的文字內容3s33333","藍色的文字內容13412341234123"];
let say2_arr = ["早安555", "色的120522", "125文字內容333333","5555色的文字內容13412341234123"];
let say3_arr = ["早安666", "色的120522", "125文字內容333333","5555色的文字內容13412341234123"];

function speak(chat_library){

if(chat_library == 1){
    var r1 = getRandomInt(say1_arr.length);
    $("#say").css("color", "blue").text(say1_arr[r1]);
    
}

if(chat_library == 2){
    var r2 = getRandomInt(say2_arr.length);
    $("#say").css("color","red").text(say2_arr[r2]);
}

if(chat_library == 3){
    var r3 = getRandomInt(say3_arr.length);
    $("#say").css("color","yellow").text(say3_arr[r3]);
}


};