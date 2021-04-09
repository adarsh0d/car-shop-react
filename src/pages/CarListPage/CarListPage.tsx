import React, { FunctionComponent, useState} from 'react';
import AppFrame from '../../components/AppFrame/AppFrame';
import CarFilterObj from '../../interfaces/CarFilterObj';

import CarListView from '../../views/CarListView/CarListView';
import CarSortPanelView from '../../views/CarSortPanelView/CarSortPanelView';

import styles from './CarListPage.module.css'

const CarListPage: FunctionComponent = () => {
    const [filterObj, setFilterObj] = useState({} as CarFilterObj);
    const handleSubmit = (filterObj: CarFilterObj): void => {
        setFilterObj(filterObj);
    }   
    return(
        <AppFrame>
            <section className={styles.page__container}>
                <CarSortPanelView handleSubmit={handleSubmit}></CarSortPanelView>
                <CarListView filterObj={filterObj}></CarListView>
            </section>
        </AppFrame>
    )
}

export default CarListPage;