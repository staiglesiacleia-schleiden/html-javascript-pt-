function checkAnswer(answer) {
    const result = document.getElementById("result");

    if (answer === 'a') {
        result.innerHTML = "Correct! 🎉";
    } else {
        result.innerHTML = "Wrong answer. Try again!";
    }
}