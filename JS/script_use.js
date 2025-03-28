//點擊按鈕 觸發id:show-dialog
//顯示對話框
document.getElementById('show-dialog').addEventListener('click', function () {

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
//對話框的內容隨機
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function speak(chat_library) {
    let say1_arr = ["早安，或者晚安~", "我們感覺許久未見呢!", "今天的你還好嗎?明天也加油喔", "需要幫忙嗎，米娜在此等候~"];
    let say2_arr = ["告訴你一個有趣的事，按鈕按太快會bug", "你喜歡紫色嗎？我也很喜歡喔", "別為我為甚麼長這樣，作者他沒心...", "米娜喜歡飯飯!但菜單裡沒有..."];
    let say3_arr = ["吃飯皇帝大！先休息一下吧", "別熬夜了！明天早上更適合和努力", "你足夠美好，不必在乎他人眼光", "或許無法達成，但你也盡力過就足夠了!"];


    if (chat_library == 1) {
        var r1 = getRandomInt(say1_arr.length);
        $("#say").css("color", "white").text(say1_arr[r1]);
        playDialog();
    }
    if (chat_library == 2) {
        var r2 = getRandomInt(say2_arr.length);
        $("#say").css("color", "white").text(say2_arr[r2]);
        playDialog();
    }

    if (chat_library == 3) {
        var r3 = getRandomInt(say3_arr.length);
        $("#say").css("color", "white").text(say3_arr[r3]);
        playDialog();
    }

};

function eat(table_library) {
    let food1_arr = ["../IMG/enjoy_img/fta_01.png"];
    let food2_arr = ["../IMG/enjoy_img/fta_02.png"];
    let food3_arr = ["../IMG/enjoy_img/fta_03.png"];
    let food4_arr = ["../IMG/enjoy_img/fta_04.png"];

    $("#food-ontable1, #food-ontable2, #food-ontable3, #food-ontable4").css("display", "none");

    let food_text1_arr = ["1這薯條看起來不錯!", "1這漢堡好香!", "1可樂冰冰涼涼!", "1吐司很適合早餐!"];
    let food_text2_arr = ["2這薯條看起來不錯!", "2這漢堡好香!", "2可樂冰冰涼涼!", "2吐司很適合早餐!"];
    let food_text3_arr = ["3這薯條看起來不錯!", "3這漢堡好香!", "3可樂冰冰涼涼!", "3吐司很適合早餐!"];
    let food_text4_arr = ["4這薯條看起來不錯!", "4這漢堡好香!", "4可樂冰冰涼涼!", "4吐司很適合早餐!"];

    if (table_library == 1) {
        var r1 = getRandomInt(food1_arr.length);
        $("#food-ontable1").css("display", "block").attr("src", food1_arr[r1].text(food_text1_arr[r1]));
        playDialog("food-ontable1");
    }
}


/*食物顯示*/
/*function eat(table_library) {
    let food1_arr = ["../IMG/enjoy_img/fta_01.png"];
    let food2_arr = ["../IMG/enjoy_img/fta_02.png"];
    let food3_arr = ["../IMG/enjoy_img/fta_03.png"];
    let food4_arr = ["../IMG/enjoy_img/fta_04.png"];

    $("#food-ontable1, #food-ontable2, #food-ontable3, #food-ontable4").css("display", "none");

    let food_text_arr = ["1這薯條看起來不錯!", "1這漢堡好香!", "1可樂冰冰涼涼!", "1吐司很適合早餐!"];
    let food_text2 = ["2這薯條看起來不錯!", "2這漢堡好香!", "2可樂冰冰涼涼!", "2吐司很適合早餐!"];
    let food_text3 = ["3這薯條看起來不錯!", "3這漢堡好香!", "3可樂冰冰涼涼!", "3吐司很適合早餐!"];
    let food_text4 = ["4這薯條看起來不錯!", "4這漢堡好香!", "4可樂冰冰涼涼!", "4吐司很適合早餐!"];


    let r = table_library - 1; // 取得對應的對話
    $("#say").css("color", "white").text(food_text_arr[r]);
    playDialog(); // 這樣點食物才會顯示特定的對話框


    if (table_library == 1) {
        var r1 = getRandomInt(food_text_arr.length);
        $("#food-ontable1").css("display", "block").attr("src", food_text_arr[r1]);
        //playDialog("food-ontable1");
    } 
    if (table_library == 2) {
        $("#food-ontable2").css("display", "block").attr("src", food2_arr[2]);
        //playDialog("food-ontable2");
    } 
    if (table_library == 3) {
        $("#food-ontable3").css("display", "block").attr("src", food3_arr[3]);
        //playDialog("food-ontable3");
    }
    if (table_library == 4) {
        $("#food-ontable4").css("display", "block").attr("src", food4_arr[4]);
        //playDialog("food-ontable4");
    }
}*/



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