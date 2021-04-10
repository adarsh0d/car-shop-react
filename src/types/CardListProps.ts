type CardListProps<T extends Object> = {
    list: Array<T>,
    currentPageNumber?: number,
    totalCount: number,
    totalPageCount: number,
    updateCurrentPage:  (pageNumber: number) => void,
    renderList: Function
}

export default CardListProps