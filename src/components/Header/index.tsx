import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  SetClearBooks,
  SetSearchCategory,
    SetSearchSort,
    SetSearchWord,
    getBooks,
    selectPaginationIndex,
    selectSearchCategory,
    selectSearchSort,
    selectSearchWord
} from '../../store/slices/bookSlice';
import style from './style.module.scss';
import Input from '../common/Input';
import Select from '../common/Select';
import { categories, sorting } from '../../constants/base';
import { createEndpoint } from '../../constants/helpers';

const Header: FC = () => {
    const dispatch = useDispatch();

    const startIndex = useSelector(selectPaginationIndex);
    const word = useSelector(selectSearchWord);
    const sort = useSelector(selectSearchSort);
    const category = useSelector(selectSearchCategory);

    const search = (searchWord: string, searchCategory: string, searchSort: string) => {
        dispatch(SetClearBooks());
        const endpoint = createEndpoint(searchWord, searchCategory, searchSort, startIndex);
        dispatch(getBooks(endpoint));
    };

    const selectWord = (findWord: string) => {
        dispatch(SetSearchWord(findWord));
        search(findWord, category, sort);
    };

    const selectCategories = (value: string) => {
        dispatch(SetSearchCategory(value));
        if (!!word) {
            search(word, value, sort);
        };
    };

    const selectSort = (value: string) => {
        dispatch(SetSearchSort(value));
        if (!!word) {
            search(word, category, value);
        };
    };

    return (
        <div className={style.header}>
            <div className={style.content}>
                <h1 className={style.title}>Search for books</h1>
                <Input search={selectWord}/>
                <div className={style.filter}>
                    <Select title='Categories' options={categories} selectValue={selectCategories}/>
                    <Select title='Sorting by' options={sorting} selectValue={selectSort} />
                </div>
            </div>
        </div>
    );
};

export default Header;
