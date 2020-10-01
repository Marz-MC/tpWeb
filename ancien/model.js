
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing(){
    this.shapes = new Array();

    Drawing.prototype.addShape = function(shape){
        this.shapes.push(shape);
    }

    Drawing.prototype.getShapes = function(){
        return this.shapes;
    }
}

function Shape(color, thickness){
    this.thickness = thickness;
    this.color = color;
}

function Rectangle(x1, y1, x2, y2, thickness, color){
    Shape.call(this, color, thickness);
    this.x1 = x1;
    this.y1 = y1;
    this.width = x2;
    this.height = y2;

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

function Line(x1, y1, x2, y2, thickness, color){
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
