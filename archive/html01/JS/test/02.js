document.getElementById('show-dialog').addEventListener('click', function() {
    const dialog = document.getElementById('dialog');
    dialog.classList.remove('hidden', 'bounce-out');
//hidden改block_say
    dialog.classList.add('bounce-in');

    setTimeout(function() {
        dialog.classList.remove('bounce-in');
        dialog.classList.add('bounce-out');
        setTimeout(function() {
            dialog.classList.add('hidden');
        }, 500); // Wait for the bounce-out animation to complete
    }, 3000); // Show the dialog for 3 seconds
});
