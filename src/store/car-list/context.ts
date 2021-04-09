import React, { createContext } from "react";
import CarActionType from "./actions";
import { initState } from "./state";

const CarListPageContext = createContext({
    state: initState,
    dispatch: (action: CarActionType) => {}
});
export default CarListPageContext;