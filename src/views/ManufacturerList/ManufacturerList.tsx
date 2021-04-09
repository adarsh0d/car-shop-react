import React, { FunctionComponent, useEffect, useState } from 'react';
import Select from '../../components/Select/Select';
import Manufacturer from '../../interfaces/Manufacturer';
import ManufacturerData from '../../interfaces/ManufacturerData';
import { fetchManufacturers } from '../../services/car.service';
import SelectOption from '../../types/SelectOption';
type ManufacturerListProps = {
    selectManufacturer:(selectedManufacturer: SelectOption) => void
}
const ManufacturerList: FunctionComponent<ManufacturerListProps> = ({selectManufacturer}) => {
    const [ manufacturers, setManufacturers] = useState([] as Array<SelectOption>)
    
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
            handleChange={selectManufacturer}>
        </Select>
    )
}
export default ManufacturerList;