import React, { FunctionComponent, useEffect, useState} from 'react';
import Select from '../../components/Select/Select';
import ColorData from '../../interfaces/ColorData';
import { fetchColors } from '../../services/car.service';
import SelectOption from '../../types/SelectOption';
type ColorsListProps = {
    selectColor:(selectedColor: SelectOption) => void
}
const ColorsList: FunctionComponent<ColorsListProps> = ({selectColor}) => {
    const [colors, setColors] = useState([] as Array<SelectOption>)  
    
    useEffect(()=> {
        (async() => {
            const colorObject: ColorData = await fetchColors();
            const selectOptions = colorObject?.data?.colors.map((color: string): SelectOption => {
                return {text: color, value: color}
            })
            setColors(selectOptions);
        })()
    }, [])
    return(
        <Select 
            default={{
                value: '',
                text: 'All Colors'
            }} 
           
            options={colors} 
            labelText="Color" 
            ariaLabel="Select Car Color" 
            handleChange={selectColor}>
        </Select>
    )
}

export default ColorsList;