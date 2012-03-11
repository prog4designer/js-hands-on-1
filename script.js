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
  Button.prototype = {
    countUp: function() {
      var message = this.name + ' は ' + ++this.counter + ' 回クリックされました';
      console.log(message);
    },
    countDown: function() {
      var message = this.name + ' は ' + --this.counter + ' 回に減りました';
      console.log(message);
    },
    reset: function() {
      this.counter = 0;
      var message = this.name + ' はリセットされました';
      console.log(message);
    }
  };

  var btn1 = new Button('button1');
  btn1.element.click(function() {
    btn1.countUp();
  });

  var btn2 = new Button('button2');
  btn2.element.click(function() {
    btn2.countUp();
  });

  
  var countDownButton = new Button('Count Down');
  countDownButton.element.click(function() {
    btn1.countDown();
    btn2.countDown();
  });
    
  var resetButton = new Button('Reset');
  resetButton.element.click(function() {
    btn1.reset();
    btn2.reset();
  });

});
