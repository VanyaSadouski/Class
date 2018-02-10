class Car {
    constructor(weight, volume, power) {
        this.weight = weight;
        this.volume = volume;
        this.power = power;
    }

    maxSpeed() {
        return Math.floor((this.power / this.weight) * 2000);
    }

    fuelConsumption() {
        let res = (this.power * this.weight) / 10000;
        if (res > 40) return 40;
        return res
    }

    secondsToHundred() {
        return Math.round((Math.pow(this.weight / this.power, .75)) * 1000) / 1000;
    }

    race(dist) {
        let fuel = this.fuelConsumption() * dist / 100;
        let fill = 0;
        let result;
        while (fuel > this.volume) {
            fill += fill + 180;
            fuel -= this.volume;
        }
        result = Math.floor((dist / this.maxSpeed()) * 3600 + fill);

        let sec_num = parseInt(result);
        let hours = Math.floor(sec_num / 3600) % 24;
        let minutes = Math.floor(sec_num / 60) % 60;
        let seconds = sec_num % 60;
        let resultOfRace = [hours, minutes, seconds]
            .map(v => v < 10 ? "0" + v : v)
            .filter((v, i) => v !== "00" || i > 0)
            .join(":");
        return console.log( `Вес автомобиля : ${this.weight}кг
Объем бака : ${this.volume}л.
Мощность : ${this.power}л.с.
Максимальная скорость : ${this.maxSpeed()}км/ч
Разгон до 100км/ч : ${this.secondsToHundred()}сек.
Расход на 100км : ${this.fuelConsumption()}л.
Пройдет расстояние в ${dist}км  за ${resultOfRace}`);
    }
}

let car1 = new Car(1300, 100, 200);
let car2 = new Car(1600, 60, 80);



car1.race(627);
car2.race(527);
console.log(car1);
