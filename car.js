export class Car {
    constructor(type, year) {
        this.type = type;
        this.year = year;
    }

    drive(){
        console.log("Car is driving");
    }

    static carColor(){
        return 'color is nave blue';
    }
}