import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  console.log("in pagination");
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
    console.log("pagination nu-------",pageNumbers);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number =>
        
        (
          
          <li key={number} className='page-item'>
            <a onClick={() => {
              console.log("number",number);
              return(paginate(number))
            }} className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;