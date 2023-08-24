import React from 'react';
import {sortableElement} from '../../..';

import styles from './Item.scss';

function Item(props) {
  const {children} = props;

  return (
    <div className={styles.root} tabIndex={0}>
      {children}
    </div>
  );
}

export default sortableElement(Item);
