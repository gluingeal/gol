var rows = 24;
var cols = 24;

var playing = false;

// initialize
function initialize() {
  createTable();
  setupControlButtons();
}

function cellClickHandler() {
  var classes = this.getAttribute('class');
  if (classes.indexOf('live') > -1) {
    this.setAttribute('class', 'dead');
  } else {
    this.setAttribute('class', 'live');
  }
}

// lay out the board
function createTable() {
  var gridContainer = document.getElementById('gridContainer');
  if (!gridContainer) {
    // throw error
    console.error('Problem: no div for the grid table!');
  }
  var table = document.createElement('table');

  for (var i = 0; i < rows; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < cols; j++) {
      var cell = document.createElement('td');
      cell.setAttribute('id', i + '_' + j);
      cell.setAttribute('class', 'dead');
      cell.onclick = cellClickHandler;
      tr.appendChild(cell);
    }
    table.appendChild(tr);
  }
  gridContainer.appendChild(table);
}

function setupControlButtons() {
  var startButton = document.getElementById('start');
  startButton.onclick = startButtonHandler;
  var clearButton = document.getElementById('clear');
  clearButton.onclick = clearButtonHandler;
}

function clearButtonHandler() {
    playing = false;
    var startButton = document.getElementById('start');
    startButton.innerHTML = "start"

}

function startButtonHandler() {
  if (playing) {
    console.log('Pause the Game');
    playing = false;
    this.innerHTML = 'continue';
  } else {
    console.log('Cont the game');
    playing = true;
    this.innerHTML = 'pause';
    play();
  }
}

function play() {
    console.log("Play the game")
}

// start everything
window.onload = initialize;
