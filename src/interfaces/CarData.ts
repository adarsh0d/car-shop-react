import Car from "./Car";

export default interface CarData {
    data: {
        cars: Array<Car>
        totalPageCount: number,
        totalCarsCount: number
    }
}