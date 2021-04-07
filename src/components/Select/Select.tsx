import React, { FunctionComponent, useState } from 'react'
import SelectOption from '../../types/SelectOption';
import styles from './Select.module.css';
type SelectProps = {
    options: Array<SelectOption>,
    selectedValue: SelectOption,
    handleChange: (value: SelectOption) => void,
    labelText?: string,
    ariaLabel: string,
    default: SelectOption,
    className?: string
}
type SelectOptionProps = {
    option: SelectOption
    handleChange: (value: SelectOption) => void,
}
type SelectOptionListProps = {
    options: SelectOption[],
    defaultValue: SelectOption
    handleChange: (value: SelectOption) => void,
    selectedValue: SelectOption
}
const Option: FunctionComponent<SelectOptionProps> = ({ option, handleChange }) => {
    return (
        <div data-testid="select-option" onClick={() => handleChange(option)} aria-label={option.text} >{option.text}</div>
    )
}
const OptionList: FunctionComponent<SelectOptionListProps> = React.memo(({options, defaultValue,selectedValue, handleChange}) => {
    return (
        <ul role="listbox" className={styles.select__options}>
            <li className={styles.select__option} role="option" aria-selected={defaultValue.value === selectedValue.value}>
                <Option option={defaultValue} handleChange={handleChange}></Option>
            </li>
                {options.map((option: SelectOption, i: number) =>
                    <li className={styles.select__option} role="option" key={i}  aria-selected={option.value === selectedValue.value}><Option option={option} handleChange={handleChange}></Option></li>
                )}
        </ul>
    )
})
const Select: FunctionComponent<SelectProps> = ({ options, className = ``, default: defaultValue, handleChange, selectedValue, labelText, ariaLabel }) => {
    const [showMenu, setShowMenu] = useState(false)
 
    return (
        <>
            {labelText && <label title={labelText}>{labelText}</label>}
            <div role="combobox"
                    onClick={() => setShowMenu(showMenu => !showMenu)} 
                    className={`${styles.select} ${className}`} >
                <span>{selectedValue.text}</span>
                <div className={`${!showMenu ? styles.triangle__down: styles.triangle__up}`}></div>
            </div>
            {showMenu && (
               <OptionList selectedValue={selectedValue} options={options} defaultValue={defaultValue} handleChange={handleChange}></OptionList>
            )}

        </>
    )
}

export default Select;