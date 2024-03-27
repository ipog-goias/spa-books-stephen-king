import React, { FC } from 'react';
import styles from './BookDetail.module.css';

interface BookDetailProps {}

const BookDetail: FC<BookDetailProps> = () => (
  <div className={styles.BookDetail} data-testid="BookDetail">
    BookDetail Component
  </div>
);

export default BookDetail;
