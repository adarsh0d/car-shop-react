import React, { FunctionComponent, useCallback, useEffect, useRef, useState } from 'react';
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
interface CarsDataInterface {
    cars: Car[],
    totalCarsCount: number,
    totalPageCount: number
}

const CarListView: FunctionComponent<CarListViewProps> = ({ filterObj }) => {
    const [carObj, setCarObj] = useState({
        cars: [],
        totalCarsCount: 0,
        totalPageCount: 0
    } as CarsDataInterface)
       
    const mountedRef = useRef(false)
    const [isLoading, setIsLoading] = useState(true)
    const [currentPageNumber, setCurrentPageNumber] = useState(1)

  
    useEffect(() => {
      mountedRef.current = true
      return () => {
        mountedRef.current = false
      }
    }, [])

    const getData = useCallback(async(pageNumber: number) => {
        const responseObj: CarData = await fetchCars(pageNumber, filterObj);
        if (mountedRef.current) {
            setCarObj((carObj) => ({ ...carObj, ...responseObj?.data }));
            setIsLoading(false);
            setCurrentPageNumber(pageNumber);
        }      
    }, [filterObj.selectedColor, filterObj.selectedManufacturer])

    useEffect(() => {
        getData(1)
    }, [getData])

    return (
        <section className={styles.cars__list}>
            <h1 className={styles.page__heading}>Available cars</h1>
            {!isLoading ? (
                <CardList
                    list={carObj.cars}
                    currentPageNumber={currentPageNumber}
                    totalCount={carObj.totalCarsCount}
                    totalPageCount={carObj.totalPageCount}
                    updateCurrentPage={getData}
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