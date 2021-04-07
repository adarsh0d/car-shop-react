import React, { FunctionComponent, useContext, useEffect, useState} from 'react';
import Select from '../../components/Select/Select';
import ColorData from '../../interfaces/ColorData';
import { fetchColors } from '../../services/car.service';
import CarListPageContext from '../../store/car-list/context';
import SelectOption from '../../types/SelectOption';

const ColorsList: FunctionComponent = () => {
    const initValue: Array<SelectOption> = [];
    const [colors, setColors] = useState(initValue)
    useEffect(()=> {
        (async() => {
            const colorObject: ColorData = await fetchColors();
            const selectOptions = colorObject?.data?.colors.map((color: string): SelectOption => {
                return {text: color, value: color}
            })
            setColors(selectOptions);
        })()
    }, [])
    const { state, selectColor } = useContext(CarListPageContext)
    return(
        <Select 
            default={{
                value: '',
                text: 'All Colors'
            }} 
           
            options={colors} 
            labelText="Color" 
            ariaLabel="Select Car Color" 
            selectedValue={state.selectedColor} 
            handleChange={selectColor}>
        </Select>
    )
}

export default ColorsList;