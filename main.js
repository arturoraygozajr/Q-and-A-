'use strict'

var ref = new Firebase('https://artqanda.firebaseio.com/');

var questionsRef = ref.child('questions')
var $addQuestion, $questions;

$(document).ready(function(){
  $questions = $('#addQuestion');
  $('#postIt').click(createQuestion);
});

function createQuestion() {
  
  var info = {};
  info.title = $('#title').val();
  info.date = Date.now() + "";
  info.question = $('#question').val();
  questionsRef.push(info);
}

questionsRef.on('value', function(snap) {
  $questions.empty();
  snap.forEach(function(child) {
    console.log(child.val().title);
    var $title = $('<li>').text(child.val().title);
    var $questions =  $('<li>').text(child.val().question);
    var $date = $('<li>').text(child.val().date);
    $questions.append($title).append($questions).append($date);
  });
});

  // event.preventDefult();

  // var title = $("#title").val();
  // var question = $("#question").val();
  // var date = $()
