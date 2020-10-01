
// La création d'un Dnd requiert un canvas et un interacteur.
function DnD(canvas, interactor) {
  this.xInit = 0;
  this.yInit = 0;
  this.xFinal = 0;
  this.yFinal = 0;
  this.mousePressed = false;
  this.pencil = interactor;

  this.pickUp = function(evt) {
    this.mousePressed = true;
    pos = getMousePosition(canvas, evt);
    this.xInit = pos.x;
    this.yInit = pos.y;
    this.xFinal = pos.x;
    this.yFinal = pos.y;
    this.pencil.interactionStart(this);
  }.bind(this);

  this.move = function(evt){
    if(this.mousePressed){
      mousePos = getMousePosition(canvas, evt);
      this.xFinal = mousePos.x;
      this.yFinal = mousePos.y;
      this.pencil.interactionUpdate(this);
    }
  }.bind(this);

  this.drop = function(evt){
  if(this.mousePressed){
    pos = getMousePosition(canvas, evt);
    this.xFinal = pos.x;
    this.yFinal = pos.y;
    this.pencil.interactionEnd(this);
    this.mousePressed = false;
  }
  }.bind(this);

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
