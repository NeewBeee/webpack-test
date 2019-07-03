const path = require('path');
import printMe from './print';
import './resource/style.css';
import Icon from './resource/icon.png';
import { cube } from './math';

function component() {
  var element = document.createElement('div');
  var element1 = document.createElement('pre');
  var btn = document.createElement('button');

  // element.innerHTML = _.join(['hello', 'webpack'], ' ');
  element.classList.add('hello');

  console.log(path.resolve(__dirname))
  console.log(path.resolve(__dirname, 'dist'))
  console.log(__dirname);

  var myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  btn.innerHTML = 'Click m and check the console!';
  btn.onclick = printMe;
  element.appendChild(btn);

  element1.innerHTML = ['hello webpack','5 cubed is equal to' + cube(5)].join('\n\n')

  return element1;
}
// document.body.appendChild(component());
let element = component();
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
    // printMe();
    document.body.removeChild(element);
    element = component();
    document.body.appendChild(element);
  })
}