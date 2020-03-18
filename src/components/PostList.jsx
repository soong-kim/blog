import React from 'react';
import Post from './Post';

import '../sass/theme.scss';
import '../assets/css/style.scss';

const PostList = ({ posts }) => {
  const postLists = posts.map((post, idx) => (<li key={idx}><Post post={post} /></li>));
  return (
    <div className='container'>
      <ul className='posts'>{postLists}</ul>
    </div>
  );
};

export default PostList;
