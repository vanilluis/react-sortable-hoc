import React from 'react';
import {sortableContainer} from '../..';

import Item from './Item';

function List({items}) {
  return (
    <div>
      {items.map(([key, children], index) => {
        return (
          <Item key={key} index={index}>
            {children}
          </Item>
        );
      })}
    </div>
  );
}

export default sortableContainer(List);
