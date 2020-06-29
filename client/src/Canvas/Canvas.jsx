import * as React from 'react';
import './Canvas.css'


var gameArea = document.getElementById('gameArea');
var widthToHeight = 4 / 3;

var newWidth = window.innerWidth;
var newHeight = window.innerHeight;

var newWidthToHeight = newWidth / newHeight;

if (newWidthToHeight > widthToHeight) {
  // window width is too wide relative to desired game width
  newWidth = newHeight * widthToHeight;
  gameArea.style.height = newHeight + 'px';
  gameArea.style.width = newWidth + 'px';
} else {
	// window height is too high relative to desired game height
  newHeight = newWidth / widthToHeight;
  gameArea.style.width = newWidth + 'px';
  gameArea.style.height = newHeight + 'px';
}

gameArea.style.marginTop = (-newHeight / 2) + 'px';
gameArea.style.marginLeft = (-newWidth / 2) + 'px';

var gameCanvas = this.refs.canvas;
console.log(gameCanvas)
gameCanvas.width = newWidth;
gameCanvas.height = newHeight;

function resizeGame() {
    var gameArea = document.getElementById("gameArea");
    var widthToHeight = 4 / 3;
    var newWidth = window.innerWidth;
    var newHeight = window.innerHeight;
    var newWidthToHeight = newWidth / newHeight;

    if (newWidthToHeight > widthToHeight) {
        newWidth = newHeight * widthToHeight;
        gameArea.style.height = newHeight + 'px';
        gameArea.style.width = newWidth + 'px';
    } else {
        newHeight = newWidth / widthToHeight;
        gameArea.style.width = newWidth + 'px';
        gameArea.style.height = newHeight + 'px';
    }

    gameArea.style.marginTop = (-newHeight / 2) + 'px';
    gameArea.style.marginLeft = (-newWidth / 2) + 'px';

    var gameCanvas = this.refs.canvas;
    gameCanvas.width = newWidth;
    gameCanvas.height = newHeight;
}

window.addEventListener('resize', resizeGame, false);
window.addEventListener('orientationchange', resizeGame, false);

class Canvas extends React.Component {
componentDidMount() {
  const canvas = this.refs.canvas;
  const context = canvas.getContext('2d');
  context.rect(20, 20, 150, 100);
  context.fill();
}

render() {
    return(
      <div id='gameArea' ref='gameArea'>
        <canvas ref='canvas' width={400} height={400} />
      </div>
    )
  }
}
export default Canvas
