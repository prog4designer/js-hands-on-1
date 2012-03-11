$(function(){
  // ここにコードを記入
  var Button = function(name) {
    this.name = name;
    this.element = $('<input/>').
      attr({type: 'button', value: name}).
      appendTo('body');
    this.counter = 0;

    return this;
  };
  Button.prototype.countUp = function() {
    var message = this.name + ' は ' + ++this.counter + ' 回クリックされました';
    console.log(message);
  };

  var btn1 = new Button('button1');
  btn1.element.click(function() {
    btn1.countUp();
  });

  var btn2 = new Button('button2');
  btn2.element.click(function() {
    btn2.countUp();
  });

});
