import React, { FC } from 'react';
import Header from '../../components/Header';
import Counter from '../../components/Counter';
import BookList from '../../components/BookList';

const Home: FC = () => {
  return (
    <>
        <Header/>
        <Counter/>
        <BookList />
    </>
  )
};

export default Home;
