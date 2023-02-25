'use strict';
let blocks = document.getElementsByClassName('qustion');
let index = 0;
let form = document.forms['form'];
let answer = ['1', '3', '4', '3', '4'];
let point = 0;

document.getElementById('next').addEventListener('click', function() {
    if (form['qustion-' + index].value != '') {
        showNextQuestion();
    }
})

document.getElementById('prev').addEventListener('click', function() {
    showPrevQuestion();
})

function showNextQuestion() {
  if (index < blocks.length - 1) {
    if (index === 0) {
      document.getElementById('prev').style.display = 'block';
    }
    blocks[index].style.display = 'none';
    ++index;
    blocks[index].style.display = 'block';
  } else if (index === blocks.length - 1) {
    answer.forEach((item, i) => {
      if (form['qustion-' + i].value === item) {
        point++
      }
    });
    blocks[index].style.display = 'none';
    document.getElementById('prev').style.display = 'none';
    document.getElementById('next').style.display = 'none';
    document.getElementById('result').innerText = `Your score is ${point} from 5`;
  }
}

function showPrevQuestion() {
    if (index > 0) {
        blocks[index].style.display = 'none';
        --index;
        blocks[index].style.display = 'block';
    }
}