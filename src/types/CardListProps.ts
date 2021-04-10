type CardListProps<T extends Object> = {
    list: Array<T>,
    initialPageNumber?: number,
    totalCount: number,
    totalPageCount: number,
    updateCurrentPage:  (pageNumber: number) => void,
    renderList: Function
}

export default CardListProps