import CarActionType from "./actions";
import { CarState } from "./state";

const CarListPageReducer = (prevState: CarState, action: CarActionType): CarState => {
    switch (action.type) {
        case 'FETCH_CARS':
            return {
                ...prevState,
                isLoading: true
            };
        case 'SET_CARS':
            return {
                ...prevState,
                isLoading: false,
                cars: action.payload.data.cars,
                totalCount: action.payload.data.totalCarsCount,
                totalPageCount: action.payload.data.totalPageCount,
            };
        case 'SELECT_MANUFACTURER': 
            return {
                ...prevState,
                selectedManufacturer: action.payload,
                pageNumber: 1
            };
        case 'SELECT_COLOR': {
            return {
                ...prevState,
                selectedColor: action.payload,
                pageNumber: 1
            };
        }
        case 'SET_PAGE_NUMBER': {
            return {
                ...prevState,
                pageNumber: action.payload,
                isLoading: true
            };
        }
        default:
            return {
                ...prevState
            }
    }
}

export default CarListPageReducer;
