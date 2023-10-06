export interface BookState {
    books: any[]
    error: boolean
    loading: boolean
    totalCounter: number
    paginationIndex: number
    searchWord: string
    searchCategory: string
    searchSort: string
}

export type GetBooks = {
    (endpoint: string): any
}

export interface State {
    books: BookState
}
