import React, { FunctionComponent, useEffect, useState } from 'react';
import CardList from '../../components/CardList/CardList';
import Car from '../../interfaces/Car';
import CarData from '../../interfaces/CarData';
import CarFilterObj from '../../interfaces/CarFilterObj';
import { fetchCars } from '../../services/car.service';
import CarCard from '../CarCard/CarCard';
import SkeletonCard from '../SkeletonCard/SkeletonCard';
import styles from './CarListView.module.css';

const SkeletonCardList: FunctionComponent = React.memo(() => (    
    <ul data-testid="skeleton">
        {Array(10).fill(0).map((el: number, i: number) => {
            return (<li key={i}><SkeletonCard></SkeletonCard></li>)
        })}
    </ul>
))
type CarListViewProps = {
    filterObj: CarFilterObj
} 
interface CarsInterface {
    cars: Car[],
    pageNumber: number,
    totalCarsCount: number,
    totalPageCount: number
}
const CarListView: FunctionComponent<CarListViewProps> = ({ filterObj}) => {
    const [carObj, setCarObj] = useState({
        cars: [],
        pageNumber: 1,
        totalCarsCount: 0,
        totalPageCount: 0
    } as CarsInterface)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        (async() => {
            const responseObj: CarData = await fetchCars(carObj.pageNumber, filterObj);
            setCarObj((carObj) => ({...carObj, ...responseObj.data}));
            setIsLoading(false);
        })()
    }, [carObj.pageNumber, filterObj])

   
    return (
        <section className={styles.cars__list}>
            <h1 className={styles.page__heading}>Available cars</h1>
            {!isLoading ? (
                <CardList
                    list={carObj.cars}
                    totalCount={carObj.totalCarsCount}
                    totalPageCount={carObj.totalPageCount}
                    updateCurrentPage={ (pageNumber: number): void => {setCarObj((carObj) => ({...carObj, pageNumber})) }}
                    renderList={(listItems: Car[]) => (
                        <>
                            {listItems.map((item: Car, id) => {
                                return (<li key={id} ><CarCard car={item}></CarCard></li>);
                            })}
                        </>
                    )}
                >
                </CardList>
            ) : (
                <SkeletonCardList></SkeletonCardList>
                )
            }
        </section>
    )
}

export default CarListView;