
// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.
Rectangle.prototype.paint = function(ctx) {
    ctx.beginPath();
    Shape.prototype.paint.call(this, ctx);
    ctx.rect(this.getInitX(), this.getInitY(), this.getWidth(), this.getHeight());
    ctx.stroke();
};

Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    Shape.prototype.paint.call(this, ctx);
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getShapes().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};

Shape.prototype.paint = function(ctx) {
    ctx.lineWidth = this.thickness;
    ctx.strokeStyle = this.color;
}