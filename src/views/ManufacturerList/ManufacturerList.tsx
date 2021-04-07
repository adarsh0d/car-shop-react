import React, { FunctionComponent, useContext, useEffect, useState } from 'react';
import Select from '../../components/Select/Select';
import Manufacturer from '../../interfaces/Manufacturer';
import ManufacturerData from '../../interfaces/ManufacturerData';
import { fetchManufacturers } from '../../services/car.service';
import CarListPageContext from '../../store/car-list/context';
import SelectOption from '../../types/SelectOption';

const ManufacturerList: FunctionComponent = () => {
    const [ manufacturers, setManufacturers] = useState([] as Array<SelectOption>)
    const { state, selectManufacturer } = useContext(CarListPageContext)
    useEffect(()=> {
        (async() => {
            const manufacturerObject: ManufacturerData = await fetchManufacturers();
            const selectOptions = manufacturerObject?.data?.manufacturers?.map((manufacturer: Manufacturer): SelectOption => {
                return {text: manufacturer.name, value: manufacturer.name}
            })
            setManufacturers(selectOptions);
        })()
    }, [])
    return (
        <Select
            default={{
                value: '',
                text: 'All Manufacturers'
            }}
           
            options={manufacturers}
            labelText="Manufacturer"
            ariaLabel="Select Car Manufacturer"
            selectedValue={state.selectedManufacturer}
            handleChange={selectManufacturer}>
        </Select>
    )
}

export default ManufacturerList;