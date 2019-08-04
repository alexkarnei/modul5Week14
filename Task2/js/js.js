var answer = 0;
var rightAnswer1 = document.getElementById('answer2');
var rightAnswer2 = document.getElementById('answer3');
var question1 = document.getElementById('question1');
var question2 = document.getElementById('question2')

function onClick() {
    if (rightAnswer1.checked) {
        answer++;
        question1.style.display = 'none';
        question2.style.display = 'block';
    } else {
        question1.style.display = 'none';
        question2.style.display = 'block';
    }
}

function onSecondClick() {
    if (rightAnswer2.checked) {
        answer++;
        question2.style.display = 'none';
        alert("Количество правильных ответов=" + answer);
    } else {
        alert("Количество правильных ответов=" + answer);
    }

}