import React, {FunctionComponent } from 'react';
import CardListProps from '../../types/CardListProps';
import Button from '../Button/Button';
import styles from './CardList.module.css'

const CardList: FunctionComponent<CardListProps<Object>> = ({list, pageNumber = 1, totalPageCount, totalCount, updateCurrentPage, renderList}) => {
    return (
        <section className={styles.cardlist__container}>
            <span className={styles.list__heading} aria-label={`Showing ${list.length} of ${totalCount}`}>{`Showing ${list.length} of ${totalCount}`}</span>
            <ul className={styles.card__list}>
                {renderList(list)}
            </ul>
            <section className={styles.list__pagination}>
                <Button btnType="link" handleClick={(): void => updateCurrentPage(1)} aria-label="First Page" disabled={pageNumber === 1? true: false} text="First"></Button>
                <Button btnType="link" handleClick={(): void => updateCurrentPage(pageNumber-1)} aria-label="Previous Page" disabled={pageNumber === 1? true: false} text="Previous"></Button>
                <span aria-label={`Page ${pageNumber} of ${totalPageCount}`}>{`Page ${pageNumber} of ${totalPageCount}`}</span>
                <Button btnType="link" handleClick={(): void => updateCurrentPage(pageNumber+1)} aria-label="Next Page" disabled={pageNumber === totalPageCount? true: false} text="Next"></Button>
                <Button btnType="link" handleClick={(): void => updateCurrentPage(totalPageCount)} aria-label="Last Page" disabled={pageNumber === totalPageCount? true: false} text="Last"></Button>
            </section>
        </section>
    )
}

export default CardList