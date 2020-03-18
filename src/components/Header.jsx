import React from 'react';
import { FaGithub } from 'react-icons/fa';

import '../sass/theme.scss';
import '../assets/css/style.scss';

const Header = ({main, post}) => {
  return (
    <header className="texture-black">
      <div className="container">
        {main && <h1>{main.name}</h1>}
        {main && <h2>{main.job}</h2>}
        {main && (<a href={main.github}> <FaGithub size='1.5em' color='white'/> </a>)}
        
        {post && <h1>{post.title}</h1>}
        {post && <h4 className='post-description'>{post.description}</h4>}
        {post && <div className='post-date'>Published on {post.date}</div>}
        {post && <ul className='post-tags'>{post.tags.map((tag, idx)=>(<li key={idx}>{tag}</li>))}</ul>}
      </div>
    </header>
  )
};

export default Header;
