import React, { FunctionComponent, useContext } from 'react';
import CardList from '../../components/CardList/CardList';
import Car from '../../interfaces/Car';
import CarListPageContext from '../../store/car-list/context';
import CardListProps from '../../types/CardListProps';
import CarCard from '../CarCard/CarCard';
import SkeletonCard from '../SkeletonCard/SkeletonCard';
import styles from './CarListView.module.css';

const CarList: FunctionComponent<CardListProps<Car>> = React.memo((props) => (
    <CardList
        {...props}
    >
    </CardList>
))
const SkeletonCardList: FunctionComponent = React.memo(() => (    
    <ul>
        {Array(10).fill(0).map((el: number, i: number) => {
            return (<li key={i}><SkeletonCard></SkeletonCard></li>)
        })}
    </ul>
))
const CarListView: FunctionComponent = () => {
    const { state, updateCurrentPage } = useContext(CarListPageContext)
    return (
        <section className={styles.cars__list}>
            <h1 className={styles.page__heading}>Available cars</h1>
            {!state.isLoading ? (
                <CarList
                    list={state.cars}
                    data-testid="car-list"
                    pageNumber={state.pageNumber}
                    totalCount={state.totalCount}
                    totalPageCount={state.totalPageCount}
                    updateCurrentPage={updateCurrentPage}
                    renderList={(listItems: Car[]) => (
                        <>
                            {listItems.map((item: Car, id) => {
                                return (<CarCard key={id} car={item}></CarCard>);
                            })}
                        </>
                    )}
                >
                </CarList>
            ) : (
                <SkeletonCardList></SkeletonCardList>
                )
            }
        </section>
    )
}

export default CarListView;