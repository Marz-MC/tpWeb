
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#0FF000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	new DnD(canvas, this);

	Pencil.prototype.interactionStart = function(dnd){
		drawing.paint(ctx);
		switch (this.currEditingMode) {
			case editingMode.rect:
				this.currentShape = new Rectangle(dnd.xInit, dnd.yInit, dnd.xFinal-dnd.xInit, dnd.yFinal-dnd.yFinal, this.currLineWidth, this.currColour);
				this.currentShape.paint(ctx);
				break;
			case editingMode.line:
				this.currentShape = new Line(dnd.xInit, dnd.yInit, dnd.xFinal, dnd.yFinal, this.currLineWidth, this.currColour);
				this.currentShape.paint(ctx);
				break;
			default:
				break;
		}

	}
  
	Pencil.prototype.interactionUpdate = function(dnd){
		drawing.paint(ctx);
		console.log(drawing.getShapes());
		switch (this.currEditingMode) {
			case editingMode.rect:
				this.currentShape.width = dnd.xFinal-dnd.xInit;
				console.log(this.currentShape.width);
				this.currentShape.height = dnd.yFinal-dnd.yInit;
				this.currentShape.paint(ctx);
				break;
			case editingMode.line:
				this.currentShape.x2 = dnd.xFinal;
				console.log(dnd.xFinal);
				console.log(this.currentShape.x2);
				this.currentShape.y2 = dnd.yFinal;
				this.currentShape.paint(ctx);
				break;
			default:
				break;
		}
	}
	
	Pencil.prototype.interactionEnd = function(dnd){
		drawing.addShape(this.currentShape);
		this.currentShape = null;
		drawing.paint(ctx);
	}
};


