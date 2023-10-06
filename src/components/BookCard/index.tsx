import React, { FC, useMemo } from 'react';
import style from './style.module.scss';
import notFound from '../../assets/not-found.jpg';

const getFirstSubject = (subject: any): string => {
    if (subject === undefined) {
        return '';
    };
    if (subject[0].indexOf(',') > 0) {
        return subject[0].split(',')[0];
    };
    return subject[0].split('&')[0];
};

const BookCard: FC<any> = ({ book }) => {
    const imgLink = book?.volumeInfo?.imageLinks?.smallThumbnail;
    const subject = book?.volumeInfo?.categories;
    const firstSubject = getFirstSubject(subject);
    const title = book?.volumeInfo?.title;
    const authors = book?.volumeInfo?.publisher;
    
    useMemo(() => getFirstSubject(subject), [subject]);
    
    return (
        <div className={style.card}>
            <div className={style.imgBlock}>
                <img className={imgLink ? style.img : style.notFound} src={imgLink || notFound} alt='book'/>
            </div>
            <div className={style.description}>
                <div className={style.subject}>{firstSubject}</div>
                <h3 className={style.title}>{title}</h3>
                <div className={style.authors}>{authors}</div>
            </div>
        </div>
    );
};

export default BookCard;
