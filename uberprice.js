class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distanceInMiles, timeInMinutes) {
        const distanceCost = distanceInMiles * this.costPerMile;
        const timeCost = timeInMinutes * this.costPerMinute;
        const totalPrice = this.baseFare + distanceCost + timeCost;
        return totalPrice;
    }
}


const calculator = new UberPriceCalculator(2.5, 0.3, 1.5); 
const distance = 10; // miles
const time = 20; // minutes
const price = calculator.calculatePrice(distance, time);
console.log(`The price for the Uber ride is $${price}`);
