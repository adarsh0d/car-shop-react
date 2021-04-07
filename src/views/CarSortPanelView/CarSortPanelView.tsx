import React, { FunctionComponent, useContext} from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import CarListPageContext from '../../store/car-list/context';
import ColorsList from '../ColorsList/ColorsList';
import ManufacturerList from '../ManufacturerList/ManufacturerList';
import styles from './CarSortPanelView.module.css';
const CarSortPanelView: FunctionComponent = () => {
    const { fetchCars} = useContext(CarListPageContext)
    return(
        <Card className={styles.sort__panel}>
                <ColorsList  data-testid="car-color" />
                <ManufacturerList  data-testid="car-manufacturer"/>
                <Button className={styles.btn__filter} text="Filter" handleClick={fetchCars}></Button>
        </Card>
    )
}

export default CarSortPanelView;