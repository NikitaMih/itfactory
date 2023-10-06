import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { selectTotalCounter } from '../../store/slices/bookSlice';
import style from './style.module.scss';

const Counter: FC = () => {
    const counter = useSelector(selectTotalCounter);

    return (
        <div className={style.counter}>Found {counter} results</div>
    );
};

export default Counter;
