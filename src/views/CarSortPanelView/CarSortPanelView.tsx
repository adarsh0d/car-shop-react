import React, { FunctionComponent, useState } from 'react';
import Button from '../../components/Button/Button';
import Card from '../../components/Card/Card';
import CarFilterObj from '../../interfaces/CarFilterObj';
import SelectOption from '../../types/SelectOption';
import ColorsList from '../ColorsList/ColorsList';
import ManufacturerList from '../ManufacturerList/ManufacturerList';
import styles from './CarSortPanelView.module.css';


type CartSortPanelProps = {
    handleSubmit: (data: CarFilterObj) => void
}

const CarSortPanelView: FunctionComponent<CartSortPanelProps> = ({handleSubmit}) => {
    const [ selectedColor, setSelectedColor ] = useState({} as SelectOption)
    const [ selectedManufacturer, setSelectedManufacturer ] = useState({} as SelectOption)
    const handleSort = (): void => {
        handleSubmit({
            selectedColor,
            selectedManufacturer
        });
    }

    return (
        <Card className={styles.sort__panel}>
           <ColorsList selectColor={setSelectedColor}/>
            <ManufacturerList selectManufacturer={setSelectedManufacturer}/>           
            <Button className={styles.btn__filter} text="Filter" handleClick={handleSort}></Button>
        </Card>
    )
}

export default CarSortPanelView;