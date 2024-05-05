class Circle {
    constructor(radius = 1.0, color = "red") {
        this._radius = radius;
        this._color = color;
    }

    get radius() {
        return this._radius;
    }

    set radius(radius) {
        this._radius = radius;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color;
    }

    toString() {
        return `Circle: Radius = ${this._radius}, Color = ${this._color}`;
    }

    getArea() {
        return Math.PI * this._radius * this._radius;
    }

    getCircumference() {
        return 2 * Math.PI * this._radius;
    }
}


const myCircle = new Circle();
console.log(myCircle.toString());

myCircle.radius = 2.5;
myCircle.color = "blue";

console.log(myCircle.toString()); 
console.log("Area:", myCircle.getArea()); 
console.log("Circumference:", myCircle.getCircumference()); 
