import React, {FunctionComponent} from 'react'
import SelectOption from '../../types/SelectOption';

type SelectProps = {
    options: Array<SelectOption>,
    selectedValue?: string,
    handleChange: (value: string) => void,
    labelText?: string,
    ariaLabel: string,
    default: SelectOption
}

const Select: FunctionComponent<SelectProps> = ({options, default: defaultValue, handleChange, selectedValue = '', labelText, ariaLabel}) => {
    return (
        <>
            {labelText && <label title={labelText}>{labelText}</label>}
            <select aria-label={ariaLabel} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => handleChange(e.target.value)} value={ selectedValue }>
                    <option data-testid="select-option" value={defaultValue.value} >{defaultValue.text}</option>
                    {options.map((option: SelectOption, i: number) => 
                        <option data-testid="select-option" key={i} value={option.value} >{option.text}</option>)}
               
            </select>
        </>
    )
}

export default Select;