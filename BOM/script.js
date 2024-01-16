var myWin;
function openNewWin() {
    myWin = window.open("childWin.html","","width=150,height=150");
}

function closeWin() {
    myWin.close();
}

function changeWinPos() {
    myWin.moveBy(50,50);
    myWin.focus();
}