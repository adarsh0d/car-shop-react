import React, { createContext } from "react";
import { initState } from "./state";

const CarListPageContext = createContext({
    state: initState,
    updateCurrentPage: (pageNumber: number): void => { },
    selectManufacturer: (selectedManufacturer: string): void => {},
    selectColor: (selectedColor: string): void => {}
});
export default CarListPageContext;