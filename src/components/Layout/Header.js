import { Fragment } from 'react';

import headermealImg from '../../assets/meals.jpg';
import styles from './Header.module.css';

const Header = (props) => {
  return (
    <Fragment >
      <header className={styles.header}>
        <h1>YUMMY TUMMY MEAL</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={headermealImg} alt='Pic of a lots of foods' />
      </div>
    </Fragment>
  );
};

export default Header;
