import React, { FunctionComponent, useEffect, useMemo, useReducer} from 'react';
import AppFrame from '../../components/AppFrame/AppFrame';
import CarData from '../../interfaces/CarData';
import { fetchCars } from '../../services/car.service';
import CarListPageContext from '../../store/car-list/context';
import CarListPageReducer from '../../store/car-list/reducers';
import { initState } from '../../store/car-list/state';
import SelectOption from '../../types/SelectOption';

import CarListView from '../../views/CarListView/CarListView';
import CarSortPanelView from '../../views/CarSortPanelView/CarSortPanelView';

import styles from './CarListPage.module.css'

const CarListPage: FunctionComponent = () => {
    const [state, dispatch] = useReducer(CarListPageReducer, initState);
    useEffect(() => {
        (async() => {
            if(state.isLoading) {
                const {pageNumber, selectedManufacturer, selectedColor} = state;
                const responseObj: CarData = await fetchCars(pageNumber, selectedManufacturer?.value, selectedColor?.value);
                dispatch({ type: 'SET_CARS', payload: responseObj});
            }
        })()
    }, [state])
    const contextValue = useMemo(() => {
        return { 
            state, 
            updateCurrentPage:  (pageNumber: number) => {
                dispatch({type: 'SET_PAGE_NUMBER', payload: pageNumber})               
            },
            selectManufacturer: (selectedManufacturer: SelectOption) => {
                dispatch({type: 'SELECT_MANUFACTURER', payload: selectedManufacturer})
            },
            selectColor: (selectedColor: SelectOption) => {
                dispatch({type: 'SELECT_COLOR', payload: selectedColor})
            },
            fetchCars: () => {
                dispatch({type: 'FETCH_CARS'})
            } 
        };
    }, [state]);
    
    return(
        <CarListPageContext.Provider value={contextValue}>
            <AppFrame>
                <section className={styles.page__container}>
                    <CarSortPanelView></CarSortPanelView>
                    <CarListView></CarListView>
                </section>
            </AppFrame>
        </CarListPageContext.Provider>
    )
}

export default CarListPage;