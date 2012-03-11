$(function(){
  // ここにコードを記入
  var button1Counter = 0;
  var button2Counter = 0;

  var button1 = $('<input/>').attr({type: 'button', value: 'button1'}).appendTo('body');
  button1.click(function() {
    var message = 'button1 は ' + ++button1Counter + ' 回クリックされました';
    console.log(message);
  });
    
  var button2 = $('<input/>').attr({type: 'button', value: 'button2'}).appendTo('body');
  button2.click(function() {
    var message = 'button2 は ' + ++button2Counter + ' 回クリックされました';
    console.log(message);
  });

});
