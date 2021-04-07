import React, {FunctionComponent} from 'react'

type ButtonProps = {
    text: string,
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button: FunctionComponent<ButtonProps> = ({text, handleClick}) => {
    return (
        <button onClick={(e) => handleClick(e)} title={text}>{text}</button>
    )
}

export default Button;