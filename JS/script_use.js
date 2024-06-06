
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