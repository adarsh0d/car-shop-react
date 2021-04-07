import Car from "../../interfaces/Car";
import SelectOption from "../../types/SelectOption";

interface CarState {
    colors: SelectOption[];
    manufacturers: SelectOption[];
    selectedManufacturer: SelectOption, 
    selectedColor: SelectOption,
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
    isLoading: true,
    selectedManufacturer: {
        value: '',
        text: 'All Manufacturers'
    },
    selectedColor: {
        value: '',
        text: 'All Colors'
    }
}

export { initState };
export type { CarState };
