import React, { FC, useState } from 'react';
import style from './style.module.scss';
import searchIcon from '../../../assets/icons/search.svg';

const Input: FC<any> = ({ search }) => {
    const [word, SetWord] = useState('');

    const activationSearch = (key : string) => {
        if (key === "Enter") {
            search(word);
        };
    };

    const handleInput = (value: string) => {
        SetWord(value);
    };

    return (
        <div className={style.inputBlock}>
            <input 
                className={style.input} 
                type="text"
                onChange={(event) => handleInput(event.target.value)}
                onKeyDown={(event) => activationSearch(event.key)}/>
            <button className={style.btn} onClick={search}>
                <img className={style.search} src={searchIcon} alt='search'/>
            </button>
        </div>
    );
};

export default Input;
