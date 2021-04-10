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
type SelectOptionListProps = {
    options: SelectOption[],
    handleChange: (value: SelectOption) => void,
    selectedValue: SelectOption
}
const OptionList: FunctionComponent<SelectOptionListProps> = ({options, selectedValue, handleChange}) => {
    return (
        <ul role="listbox" className={styles.select__options}>
                {options.map((option: SelectOption, i: number) =>
                    <li role="option" aria-label={option.text} onClick={() => handleChange(option)} className={styles.select__option} key={i}  aria-selected={option.value === selectedValue.value}><span>{option.text}</span></li>
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
    }, [handleChange, selectedValue])
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
               <OptionList selectedValue={selectedValue} options={[defaultValue,...options]}  handleChange={selectOption}></OptionList>
            )}

        </>
    )
}

export default Select;