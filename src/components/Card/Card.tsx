import React, {FunctionComponent} from 'react';

type CardProps = {

}
const Card: FunctionComponent<CardProps> = ({children}) => {
    return (
        <article>
            {children}
        </article>
    )
}

export default Card