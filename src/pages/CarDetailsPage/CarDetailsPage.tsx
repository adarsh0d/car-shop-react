
import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import AppFrame from '../../components/AppFrame/AppFrame';
import { RouteComponentProps } from 'react-router-dom';
import { fetchCar } from '../../services/car.service';


import styles from './CarDetailsPage.module.css'
import Car from '../../interfaces/Car';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
interface CarDetailsProps {
    stockNumber: string
}
const CarListPage: FunctionComponent<RouteComponentProps<CarDetailsProps>> = ({ match }) => {
    const [car, setCar] = useState<Car>({} as Car)    
    const {stockNumber} = match.params;
    const convertToDecimals =  useMemo((): string => car?.mileage?.number?.toLocaleString("es-ES"), [car]);
    const convertToTitleCase =  useMemo((): string => car?.color?.charAt(0).toUpperCase() + car?.color?.substr(1).toLowerCase(), [car]);

    useEffect(() => {
        (async() => {
            const carObj: {data: {car: Car}} = await fetchCar(stockNumber); 
            setCar(carObj.data.car);
        })()
    }, [stockNumber])
    return(
            <AppFrame>
                <section className={styles.page__container}>
                    <section className={styles.page__banner}>
                    
                    </section>
                    <section className={styles.car__content}>
                        <section className={styles.car__details}>
                            <h1 data-testid="heading" className={styles.page__heading}>
                                {car?.modelName}
                            </h1>
                            <p className={styles.car__summary}>Stock # {car?.stockNumber} - {convertToDecimals} {car?.mileage?.unit.toUpperCase()} - {car?.fuelType} - {convertToTitleCase} </p>
                            <p>
                                This car is currently available and can be delivered as soon as 
                                tomorrow morning. Please be aware that delivery times shown in
                                this page are not definitive and may change due to bad weather 
                                conditions.
                            </p>
                        </section>
                        <Card className={styles.car__save__card}>
                            <p data-testid="savebtn">
                                If you like this car, click the button and 
                                save it in your collection of favourite 
                                items.
                            </p>
                            <Button  className={styles.car__save__btn} text="Save" handleClick={() => {}}></Button>
                        </Card>
                    </section>
                </section>
            </AppFrame>
    )
}

export default CarListPage;