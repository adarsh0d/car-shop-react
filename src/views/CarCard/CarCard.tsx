import React, { FunctionComponent, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Car from '../../interfaces/Car';
import styles from './CarCard.module.css'
type CarProps = {
    car: Car
}
const CarCard: FunctionComponent<CarProps> = ({car}) => {
    const mileage = car?.mileage?.number;
    const color = car?.color;
    const convertToDecimals = useMemo((): string => mileage.toLocaleString("es-ES"), [mileage]);
    const convertToTitleCase = useMemo((): string => color.charAt(0).toUpperCase() + color.substr(1).toLowerCase(), [color]);
    const newTo = { 
        pathname: `/car/${car.stockNumber}`
    };
    return (
        <article>
            <Card className={styles.card__car}>
                <img loading="lazy" src={car?.pictureUrl} className={styles.car__img} height="80" width="80" alt={car?.modelName}/>
                <section className={styles.car__details}>
                    <h2 className={styles.car__title}>
                        {car?.modelName}
                    </h2>
                    <p className={styles.car__summary}>Stock # {car?.stockNumber} - {convertToDecimals} {car?.mileage?.unit.toUpperCase()} - {car?.fuelType} - {convertToTitleCase} </p>
                    <Link to={newTo} aria-label="View Details">View Details</Link>
                </section>
            </Card>
        </article>
    )
}

export default CarCard;