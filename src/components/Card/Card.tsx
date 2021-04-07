import React, {FunctionComponent} from 'react';
import styles from './Card.module.css'
type CardProps = {
    className?: string
}
const Card: FunctionComponent<CardProps> = ({className = ``, children}) => {
    return (
        <div className={`${styles.card} ${className}`}>
            {children}
        </div>
    )
}

export default Card