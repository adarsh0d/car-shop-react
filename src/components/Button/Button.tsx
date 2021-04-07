import React, {FunctionComponent} from 'react'
import styles from './Button.module.css'
type ButtonProps = {
    text: string,
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    disabled?: boolean,
    btnType?: "link" | "button",
    className?: string
}

const Button: FunctionComponent<ButtonProps> = ({text, handleClick, disabled = false, className=``, btnType="button"}) => {
     
        if(btnType === "link") {
            return ( <button className={`${styles.btn__link} ${className}`} disabled={disabled} onClick={(e) => handleClick(e)} title={text}>{text}</button>)
        } else {
            return ( <button className={`${styles.btn} ${className}`} disabled={disabled} onClick={(e) => handleClick(e)} title={text}>{text}</button>)

        }
}

export default Button;