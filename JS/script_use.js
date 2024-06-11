document.getElementById('show-dialog').addEventListener('click', function () {
    console.log('觸發按鈕');
    playDialog();
});

/*動畫*/
function playDialog() {
    const dialog = document.getElementById('dialog');
    dialog.classList.remove('block_say', 'bounce-out');
    dialog.classList.add('bounce-in');

    setTimeout(function () {
        dialog.classList.remove('bounce-in');
        dialog.classList.add('bounce-out');
        setTimeout(function () {
            dialog.classList.add('block_say');
        }, 500); // Wait for the bounce-out animation to complete
    }, 3000); // Show the dialog for 3 seconds
}

//從html移動過來了

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function speak(chat_library) {
    let say1_arr = ["早安111", "藍色的文字內容2222", "藍色的文字內容3s33333", "藍色的文字內容13412341234123"];
    let say2_arr = ["早安555", "色的120522", "125文字內容333333", "5555色的文字內容13412341234123"];
    let say3_arr = ["早安666", "色的120522", "125文字內容333333", "5555色的文字內容13412341234123"];


    if (chat_library == 1) {
        var r1 = getRandomInt(say1_arr.length);
        $("#say").css("color", "blue").text(say1_arr[r1]);
        playDialog();
    }
    if (chat_library == 2) {
        var r2 = getRandomInt(say2_arr.length);
        $("#say").css("color", "red").text(say2_arr[r2]);
        playDialog();
    }

    if (chat_library == 3) {
        var r3 = getRandomInt(say3_arr.length);
        $("#say").css("color", "yellow").text(say3_arr[r3]);
        playDialog();
    }

    /**/
};

/*網路搜來的菜單 */
$(document).ready(() => {
    $('.menu_btn').click(function () {
        //避免 a 標籤會觸發
        event.preventDefault();
        //展開或收起來
        $('.block01').slideToggle(600);

    })
    $('.header__nav li a').click(function () {
        event.preventDefault();
        //收起來
        $('.header__nav').slideUp(600);
        //以下是滾動動畫
        var sectionTitle = this.title;
        console.log(sectionTitle);
        var sectionId = "#section--" + sectionTitle;
        console.log(sectionId);
        var scrollPoint = $(sectionId).offset().top;
        var lastScrollPoint = scrollPoint - 100;
        $("html,body").animate({scrollTop: lastScrollPoint}, 800);
    })
});

/*chatgpt菜單 */
function bong() {
    var menu = document.getElementById("menu"); // 獲取菜單元素
    var hamburger = document.querySelector(".menu_btn"); // 獲取漢堡按鈕
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
    var message = document.getElementById("dialog"); // 獲取顯示信息的元素
    var hamburger = document.querySelector(".menu_btn"); // 獲取漢堡按鈕
    menu.style.right = "-250px"; // 將菜單欄滑回屏幕右側外
    message.style.display = "block"; // 顯示信息
    hamburger.style.display = "block"; // 顯示漢堡按鈕
    setTimeout(function () {
        message.style.display = "none"; // 設置一個兩秒後自動隱藏信息的計時器
    }, 2000);
}