let scoreValue, result;
objScore = document.getElementById("score");
para = document.getElementById("result");
function theGrade() {
    debugger
    scoreValue= objScore.value;
    if (scoreValue >= 90 && scoreValue <= 100) {
        result="Your Grade Is: A";
        show();

    } else if (scoreValue >= 80 && scoreValue < 90) {
        result="Your Grade Is: B";
        show();

    }
    else if (scoreValue >= 50 && scoreValue < 80) {
        result="Your Grade Is: C";
        show();

    }
    else {
        result="Your Grade Is: F";
        show();

    }
}
function show() {
    para.innerText= result;
}