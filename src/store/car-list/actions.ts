import Car from "../../interfaces/Car";
import CarData from "../../interfaces/CarData";

type setCars = {
    type: 'SET_CARS',
    payload: CarData
}
type setPageNumber = {
    type: 'SET_PAGE_NUMBER',    
    payload: number
}
type selectManufacturer= {
    type: 'SELECT_MANUFACTURER',    
    payload: string
}
type selectColor= {
    type: 'SELECT_COLOR',    
    payload: string
}
type fetchCars = {
    type: 'FETCH_CARS'
}
type CarActionType = setCars | fetchCars | setPageNumber | selectManufacturer | selectColor;

export default CarActionType;