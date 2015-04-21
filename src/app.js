/**
 * Pebble NiceTime.
 * Have a nice day.
 */

var UI = require('ui');
var Vector2 = require('vector2');


// var main = new UI.Card({
//   title: 'Pebble Nice Time',
//   icon: 'images/menu_icon_nicetime.png',
//   subtitle: 'Have a nice day.',
//   body: 'Press any button.'

// });

// main.show();

var main = new UI.Window();

var textfield = new UI.Text({
    position: new Vector2(10, 115),
    size: new Vector2(144, 30),
    font: 'gothic-36-bold',
    text: 'HAVE A NICE DAY',
    textAlign: 'left'
  });

main.add(textfield);

// Create the smile image.
var smile = new UI.Image({
  position: new Vector2(30, 20),
  size: new Vector2(84, 84),
  image:'images/smile_84.png',
  compositing:'normal'
});
main.add(smile);

main.show();
