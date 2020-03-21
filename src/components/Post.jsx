import React from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import '../sass/theme.scss';
import '../assets/css/style.scss';

const Post = ({ post }) => {
  return (
    <div>
      <div className='post-meta'>
        <Link className='post-link' to={post['href']}>
          <h2 className='post-title'>{post['title']}</h2>
        </Link>
        <div className='post-date'>
          <i className='icon-calender'> <FaRegCalendarAlt color='#999' /> </i>
          {post['date']}
        </div>
      </div>
      <div className='post'>
        <p>
          {post['description']}
        </p>
      </div>
    </div >
  );
}

export default Post;