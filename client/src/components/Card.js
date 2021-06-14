import React from 'react';
import './Card.css';

const Card = ({ post }) => {
  return (
    <div className='card'>
      <p className='cart__title'>{post.title}</p>
      <p className='cart__author'>{post.author}</p>
      <p className='cart__body'>{post.body}</p>
    </div>
  );
};

export default Card;
