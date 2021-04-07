import { AxiosPromise } from 'axios';
import React, { FunctionComponent, useEffect, useMemo, useReducer} from 'react';
import AppFrame from '../../components/AppFrame/AppFrame';
import Card from '../../components/Card/Card';
import CarData from '../../interfaces/CarData';
import { fetchCars } from '../../services/car.service';
import CarListPageContext from '../../store/car-list/context';
import CarListPageReducer from '../../store/car-list/reducers';
import { initState } from '../../store/car-list/state';

import CarListView from '../../views/CarListView/CarListView';
import ColorsList from '../../views/ColorsList/ColorsList';
import ManufacturerList from '../../views/ManufacturerList/ManufacturerList';



const CarListPage: FunctionComponent = () => {
    const [state, dispatch] = useReducer(CarListPageReducer, initState);
    useEffect(() => {
        (async() => {
            const responseObj: CarData = await fetchCars(state.pageNumber, state.selectedManufacturer, state.selectedColor);
            dispatch({ type: 'SET_CARS', payload: responseObj});
        })()
    }, [state.pageNumber, state.selectedManufacturer, state.selectedColor])
    const contextValue = useMemo(() => {
        return { 
            state, 
            updateCurrentPage: async (pageNumber: number) => {
                dispatch({type: 'SET_PAGE_NUMBER', payload: pageNumber})               
            },
            selectManufacturer: async(selectedManufacturer: string) => {
                dispatch({type: 'SELECT_MANUFACTURER', payload: selectedManufacturer})
            },
            selectColor: async(selectedColor: string) => {
                dispatch({type: 'SELECT_COLOR', payload: selectedColor})
            }  
        };
    }, [state]);
    return(
        <CarListPageContext.Provider value={contextValue}>
            <AppFrame>
                <section>
                    <Card>
                        <ColorsList  data-testid="car-color" />
                        <ManufacturerList  data-testid="car-manufacturer"/>
                    </Card>
                    <CarListView></CarListView>
                </section>
            </AppFrame>
        </CarListPageContext.Provider>
    )
}

export default CarListPage;