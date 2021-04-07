import React, { FunctionComponent, useContext} from 'react';
import Card from '../../components/Card/Card';
import ColorsList from '../ColorsList/ColorsList';
import ManufacturerList from '../ManufacturerList/ManufacturerList';

const CarSortPanelView: FunctionComponent = () => {
    return(
        <Card>
            <ColorsList  data-testid="car-color" />
            <ManufacturerList  data-testid="car-manufacturer"/>
        </Card>
    )
}

export default CarSortPanelView;