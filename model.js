
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    shapes = new Array();

    Drawing.prototype.addShape = function(shape){
        shapes.push(shape);
    }
}

function Shape(color, thickness){
    this.thickness = thickness;
    this.color = color;
}

function Rectangle(color, thickness, x1, y1, x2, y2){
    Shape.call(this, color, thickness);
    hauteur = y2;
    largeur = x2;
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;

    Rectangle.prototype.getInitX = function(){
        return x1;
    }
    Rectangle.prototype.getInitY = function(){
        return y1;
    }
    Rectangle.prototype.getWidth = function(){
        return x2;
    }
    Rectangle.prototype.getHeight = function(){
        return y2;
    }
}
Rectangle.prototype = new Shape();

function Line(color, thickness, x1, y1, x2, y2){
    Shape.call(this, color, thickness);
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    Line.prototype.getInitX = function(){
        return x1;
    }
    Line.prototype.getInitY = function(){
        return y1;
    }
    Line.prototype.getFinalX = function(){
        return x2;
    }
    Line.prototype.getFinalY = function(){
        return y2;
    }
}
Line.prototype = new Shape();
