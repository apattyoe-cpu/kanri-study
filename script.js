const questions = [
    { q: "ビタミンAは水溶性ビタミンである。", a: false, comment: "ビタミンAは脂溶性ビタミンです。" },
    { q: "成人の生体内における水の割合は約60%である。", a: true, comment: "正解です！" }
];

let currentIndex = 0;

function loadQuestion() {
    document.getElementById("result").innerText = "";
    document.getElementById("next-btn").style.display = "none";
    document.getElementById("question").innerText = questions[currentIndex].q;
}

function checkAnswer(userAns) {
    const correct = questions[currentIndex].a;
    const comment = questions[currentIndex].comment;
    const resultDiv = document.getElementById("result");

    if (userAns === correct) {
        resultDiv.innerText = "⭕️ 正解！ " + comment;
        resultDiv.style.color = "green";
    } else {
        resultDiv.innerText = "❌ 不正解... " + comment;
        resultDiv.style.color = "red";
    }
    
    document.getElementById("next-btn").style.display = "inline-block";
    currentIndex = (currentIndex + 1) % questions.length;
}

loadQuestion();