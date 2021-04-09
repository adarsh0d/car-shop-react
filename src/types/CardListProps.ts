type CardListProps<T extends Object> = {
    list: Array<T>,
    initialPage?: number,
    totalCount: number,
    totalPageCount: number,
    updateCurrentPage:  (pageNumber: number) => void,
    renderList: Function,
}

export default CardListProps