import React from 'react';

import emptySearchImg from '../../assets/EmptySearch.png';
import emptyListImg from '../../assets/EmptyList.png';

const Empty = ({ isSearch }) => (
  <div className="empty">
    <img src={isSearch ? emptySearchImg : emptyListImg} alt={`Empty ${isSearch ? 'Search' : 'List'}`} />
    {isSearch ? 'Note not found. Try searching again.' : 'Create your first note!'}
  </div>
);

export default Empty;
