import React, {FunctionComponent } from 'react';
import CardListProps from '../../types/CardListProps';


const CardList: FunctionComponent<CardListProps<Object>> = ({list, pageNumber = 1, totalPageCount, totalCount, updateCurrentPage, renderList}) => {
    return (
        <>
            <span aria-label={`Showing ${list.length} of ${totalCount}`}>{`Showing ${list.length} of ${totalCount}`}</span>
            <ul>
                {renderList(list)}
            </ul>
            <section className="pagination">
                <button onClick={(): void => updateCurrentPage(1)} aria-label="First Page" disabled={pageNumber == 1? true: false}>First</button>
                <button onClick={(): void => updateCurrentPage(pageNumber-1)} aria-label="Previous Page" disabled={pageNumber == 1? true: false}>Previous</button>
                <span aria-label={`Page ${pageNumber} of ${totalPageCount}`}>{`Page ${pageNumber} of ${totalPageCount}`}</span>
                <button onClick={(): void => updateCurrentPage(pageNumber+1)} aria-label="Next Page" disabled={pageNumber == totalPageCount? true: false}>Next</button>
                <button onClick={(): void => updateCurrentPage(totalPageCount)} aria-label="Last Page" disabled={pageNumber == totalPageCount? true: false}>Last</button>
            </section>
        </>
    )
}

export default CardList