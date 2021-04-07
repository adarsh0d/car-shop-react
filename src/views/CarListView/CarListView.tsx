import React, { FunctionComponent, useContext } from 'react';
import Card from '../../components/Card/Card';
import CardList from '../../components/CardList/CardList';
import Car from '../../interfaces/Car';
import CarListPageContext from '../../store/car-list/context';

const CarListView: FunctionComponent = () => {
    const { state, updateCurrentPage } = useContext(CarListPageContext)
    return (
        <>
            <h1>Available cars</h1>
            <CardList
                list={state.cars}
                data-testid="car-list"
                pageNumber={state.pageNumber}
                totalCount={state.totalCount}
                totalPageCount={state.totalPageCount}
                updateCurrentPage={updateCurrentPage}
                renderList={(listItems: Car[]) => (
                    <>
                        {listItems.map((item: Car, id) => {
                            return (
                                <Card key={id}>
                                   {item.modelName}
                                </Card>
                            );
                        })}
                    </>
                )}
            >
            </CardList>
        </>
    )
}

export default CarListView;