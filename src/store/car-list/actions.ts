import Car from "../../interfaces/Car";
import CarData from "../../interfaces/CarData";
import SelectOption from "../../types/SelectOption";

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
    payload: SelectOption
}
type selectColor= {
    type: 'SELECT_COLOR',    
    payload: SelectOption
}
type fetchCars = {
    type: 'FETCH_CARS'
}
type CarActionType = setCars | fetchCars | setPageNumber | selectManufacturer | selectColor;

export default CarActionType;