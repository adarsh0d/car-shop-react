import { createContext } from "react";
import SelectOption from "../../types/SelectOption";
import { initState } from "./state";

const CarListPageContext = createContext({
    state: initState,
    updateCurrentPage: (pageNumber: number): void => { },
    selectManufacturer: (selectedManufacturer: SelectOption): void => {},
    selectColor: (selectedColor: SelectOption): void => {},
    fetchCars: (): void => {}
});
export default CarListPageContext;