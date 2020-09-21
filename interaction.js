
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
	var xInit = 0;
  var yInit = 0;
  var xFinal = 0;
  var yFinal = 0;
  var mousePressed = false;
  
  DnD.prototype.pickUp = function(evt) {
    mousePressed = true;
    pos = getMousePosition(canvas, evt);
    xInit = pos.x;
    yInit = pos.y;
    console.log(xInit + ", " + yInit);
  }

  DnD.prototype.move = function(evt){
    if(mousePressed){
      mousePos = getMousePosition(canvas, evt);
      console.log(mousePos.x + ", " + mousePos.y);
    } 
  }
  
  DnD.prototype.drop = function(evt){
    if(mousePressed){
      pos = getMousePosition(canvas, evt);
      xFinal = pos.x;
      yFinal = pos.y;
      console.log(xFinal + ", " + yFinal);
      mousePressed = false;
    }
  }

  // Associer les fonctions précédentes aux évènements du canvas.
  canvas.addEventListener('mousedown', this.pickUp, false);
  canvas.addEventListener('mousemove', this.move, false);
  canvas.addEventListener('mouseup', this.drop, false);
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};
