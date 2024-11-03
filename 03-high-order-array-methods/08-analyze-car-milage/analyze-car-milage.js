function analyzeCarMileage(cars) {
    const totalMileage = cars.reduce((sum, car)=> sum + car.mileage, 0);

    const avgMileage = totalMileage / cars.length;
    

    const highestMileage = cars.reduce((highest, car)=> (car.mileage > highest.mileage ? car : highest),cars[0]);
    const lowestMileage = cars.reduce((lowest, car)=> (car.mileage < lowest.mileage ? car : lowest),cars[0]);
    return {
        averageMileage : avgMileage,
        highestMileageCar : highestMileage,
        lowestMileageCar: lowestMileage,
        totalMileage : totalMileage
    };
}
module.exports = analyzeCarMileage;