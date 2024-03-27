import React, { FC } from 'react';
import styles from './BookList.module.css';

interface BookListProps {}

const BookList: FC<BookListProps> = () => (
  <div className={styles.BookList} data-testid="BookList">
    BookList Component
  </div>
);

export default BookList;
