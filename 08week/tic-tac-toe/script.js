'use strict';

$(document).ready(function(){
  var turn = "X";
  $('[data-cell]').on('click', function(){
    if($(this).text() === ''){
      $(this).text(turn);
      wins();
      if(turn === "O"){
        turn = "X";
      }else{
        turn = "O";
      }
    }
  })


  function wins() {
    if($('[data-cell = "0"]').text() === turn &&
      $('[data-cell = "3"]').text() === turn &&
      $('[data-cell = "6"]').text() === turn) {
        alert( `Player ${turn} wins!`);
      }else if($('[data-cell = "1"]').text() === turn &&
        $('[data-cell = "4"]').text() === turn &&
        $('[data-cell = "7"]').text() === turn){
          alert( `Player ${turn} wins!`);
      }else if($('[data-cell = "2"]').text() === turn &&
        $('[data-cell = "5"]').text() === turn &&
        $('[data-cell = "8"]').text() === turn){
          alert( `Player ${turn} wins!`);
        }
  }



   function wins() {
     if($('[data-cell = "2"]').text() === turn &&
      $('[data-cell = "5"]').text() === turn &&
      $('[data-cell = "8"]').text() === turn) {
        alert( 'Player ${turn} wins!');
      }
  }
  function wins() {
    if($('[data-cell = "0"]').text() === turn &&
      $('[data-cell = "1"]').text() === turn &&
      $('[data-cell = "2"]').text() === turn) {
        alert( 'Player ${turn} wins!');
      }
  }
  function wins() {
    if($('[data-cell = "3"]').text() === turn &&
      $('[data-cell = "4"]').text() === turn &&
      $('[data-cell = "5"]').text() === turn) {
        alert( 'Player ${turn} wins!');
      }
  }
  function wins() {
    if($('[data-cell = "6"]').text() === turn &&
      $('[data-cell = "7"]').text() === turn &&
      $('[data-cell = "8"]').text() === turn) {
        alert( 'Player ${turn} wins!');
      }
  }
  function wins() {
    if($('[data-cell = "0"]').text() === turn &&
      $('[data-cell = "4"]').text() === turn &&
      $('[data-cell = "8"]').text() === turn) {
        alert( 'Player ${turn} wins!');
      }
  }
  function wins() {
    if($('[data-cell = "2"]').text() === turn &&
      $('[data-cell = "4"]').text() === turn &&
      $('[data-cell = "6"]').text() === turn) {
        alert( 'Player ${turn} wins!');
      }
  }
  $('#clear').on('click', function(){

  })
});
