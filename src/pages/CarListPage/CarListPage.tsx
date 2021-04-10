import React, { FunctionComponent, useState } from 'react';
import { AppFrame } from 'components';
import CarFilterObj from 'interfaces/CarFilterObj';

import { CarListView, CarSortPanelView } from 'views';

import styles from './CarListPage.module.css'

const CarListPage: FunctionComponent = () => {
    const [filterObj, setFilterObj] = useState({ selectedColor: '', selectedManufacturer: '' } as CarFilterObj);
    const handleSubmit = (filterObj: CarFilterObj): void => {
        setFilterObj(filterObj);
    }
    return (
        <AppFrame>
            <section className={styles.page__container}>
                <CarSortPanelView handleSubmit={handleSubmit}></CarSortPanelView>
                <CarListView filterObj={filterObj}></CarListView>
            </section>
        </AppFrame>
    )
}

export default CarListPage;