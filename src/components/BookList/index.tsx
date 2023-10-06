import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
    SetPaginationIndex, 
    getBooks, 
    selectBooks, 
    selectError, 
    selectLoading, 
    selectPaginationIndex, 
    selectSearchCategory, 
    selectSearchSort, 
    selectSearchWord, 
    selectTotalCounter 
} from '../../store/slices/bookSlice';
import { createEndpoint } from '../../constants/helpers';
import style from './style.module.scss';
import BookCard from '../BookCard';
import loader from '../../assets/loader.gif';

const BookList: FC = () => {
    const dispatch = useDispatch();

    const books = useSelector(selectBooks);
    const loading = useSelector(selectLoading);
    const startIndex = useSelector(selectPaginationIndex);
    const searchWord = useSelector(selectSearchWord);
    const searchCategory = useSelector(selectSearchCategory);
    const searchSort = useSelector(selectSearchSort);
    const counter = useSelector(selectTotalCounter);
    const error = useSelector(selectError);

    const loadMore = () => {
        const newIndex = startIndex + 30;
        dispatch(SetPaginationIndex(newIndex));
        const endpoint = createEndpoint(searchWord, searchCategory, searchSort, newIndex);
        dispatch(getBooks(endpoint));
    };

    return (
        <div className={style.books}>
            <div className={style.list}>
                {books?.map((book: any) => <BookCard key={book.id} book={book}/>)}
            </div>
            {((!!books.length || counter < books.length) && !loading) && <button className={style.loadMore} onClick={loadMore}>Load more</button>}
            {loading &&
                <img className={style.loader} src={loader} alt='loading'/>
            }
            {error && <div>Not Found</div>}
        </div>
    );
};

export default BookList;
