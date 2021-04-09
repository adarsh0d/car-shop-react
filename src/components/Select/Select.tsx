import React, { FunctionComponent, useEffect, useState } from 'react'
import SelectOption from '../../types/SelectOption';
import styles from './Select.module.css';
type SelectProps = {
    options: Array<SelectOption>,
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
        <div onClick={() => handleChange(option)} aria-label={option.text} >{option.text}</div>
    )
}
const OptionList: FunctionComponent<SelectOptionListProps> = ({options, defaultValue,selectedValue, handleChange}) => {
    return (
        <ul role="listbox" className={styles.select__options}>
            <li className={styles.select__option} aria-selected={defaultValue.value === selectedValue.value}>
                <Option option={defaultValue} handleChange={handleChange}></Option>
            </li>
                {options.map((option: SelectOption, i: number) =>
                    <li className={styles.select__option} key={i}  aria-selected={option.value === selectedValue.value}><Option option={option} handleChange={handleChange}></Option></li>
                )}
        </ul>
    )
}
const Select: FunctionComponent<SelectProps> = ({ options, className = ``, default: defaultValue, handleChange,  labelText, ariaLabel }) => {
    const [showMenu, setShowMenu] = useState(false)
    const [selectedValue, setSelectedValue] = useState(defaultValue as SelectOption)
    const selectOption = (value: SelectOption) => {
        setShowMenu(showMenu => !showMenu)
        setSelectedValue(value);
    }
    useEffect(() => {    
        handleChange(selectedValue)
    }, [selectedValue])
    return (
        <>
            {labelText && <label title={labelText}>{labelText}</label>}
            <div aria-label={labelText}
                aria-expanded={showMenu}
                role="combobox"
                    onClick={() => setShowMenu(showMenu => !showMenu)} 
                    className={`${styles.select} ${className}`} >
                <span>{selectedValue.text}</span>
                <div className={`${!showMenu ? styles.triangle__down: styles.triangle__up}`}></div>
            </div>
            {showMenu && (
               <OptionList selectedValue={selectedValue} options={options} defaultValue={defaultValue} handleChange={selectOption}></OptionList>
            )}

        </>
    )
}

export default Select;