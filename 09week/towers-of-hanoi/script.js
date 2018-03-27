"use strict";

$(document).ready(function() {
  $('.draggable').draggable({
    revert: "invalid"
  });

  $('#dropArea1, #dropArea2, #dropArea3').droppable({

    drop: function(event, ui) {
      count++;
      $('#count').text('Click')
      var drag = $(ui.draggable).data('block');
      var last = $(this).children(1).last(1).data('block');
      if(drag > last){
        $(ui.draggable).draggable('option', 'revert', true);
      }else{

      $(ui.draggable).appendTo(this).attr('style', 'position: relative');

      checkWin();
    }
  });

  function checkWin1(){
    if($('[data-stack=3]').children().length ==4){

    }
  }
  $('#clear').click(function() {=
  }
)
});
