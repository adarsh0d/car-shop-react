import Car from "../../interfaces/Car";
import SelectOption from "../../types/SelectOption";

interface CarState {
    colors: SelectOption[];
    manufacturers: SelectOption[];
    selectedManufacturer?: string, 
    selectedColor?: string,
    cars: Array<Car>,
    pageNumber?: number,
    totalCount: number,
    totalPageCount: number,
    isLoading: boolean
}

const initState: CarState = {
    cars: [],
    colors: [],
    manufacturers: [],
    pageNumber: 1,
    totalCount: 0,
    totalPageCount: 0,
    isLoading: false
}

export { initState };
export type { CarState };
