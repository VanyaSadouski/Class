function Car(weight, volume, power) {
    this.weight = weight;
    this.volume = volume;
    this.power = power;

    this.maxSpeed = function () {
        return Math.floor((this.power / this.weight) * 2000);
    };

    this.secondsToHundred = function () {
        return Math.round((Math.pow(this.weight / this.power, .75)) * 1000) / 1000;
    };

    this.fuelConsumption = function () {
        let res = (this.power * this.weight) / 10000;
        if (res > 20) return 20;
        return res
    };
}

Car.prototype.race = function (dist) {
    let fuel = this.fuelConsumption() * dist / 100;
    let fill = 0;
    let result;
    while (fuel > this.volume) {
        fill += fill + 180;
        fuel -= this.volume;
    }
    result = Math.floor((dist / this.maxSpeed()) * 3600 + fill);

    let sec_num = parseInt(result, 10);
    let hours = Math.floor(sec_num / 3600) % 24;
    let minutes = Math.floor(sec_num / 60) % 60;
    let seconds = sec_num % 60;
    let resultOfRace = [hours, minutes, seconds]
        .map(v => v < 10 ? "0" + v : v)
        .filter((v, i) => v !== "00" || i > 0)
        .join(":");
    return 'Вес автомобиля : ' + this.weight + 'кг' + '\nОбъем бака : ' + this.volume + 'л.' + '\nМощность : ' + this.power +
        'л.с.' + '\nМаксимальная скорость : ' + this.maxSpeed() + 'км/ч' + '\nРазгон до 100км/ч : ' + this.secondsToHundred() +
        'сек.' + '\nРасход на 100км : ' + this.fuelConsumption() + 'л.' + '\nПройдет расстояние в ' + dist + 'км  за ' + resultOfRace;
};


let car1 = new Car(1300, 100, 200);
let car2 = new Car(1600, 60, 80);

console.log(car1.race(600));