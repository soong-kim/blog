import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';

import Header from '../components/Header';
import OneToFifteen from './OneToFifteen';
import posts from '../posts/posts.json';

const games = { '1to15': <OneToFifteen /> };

const GameMainView = () => {
  let { name } = useParams();
  let query = new URLSearchParams(useLocation().search);
  
  const post = posts['posts'][query.get('post')];
  const [started, setStarted] = useState(false);
  console.log(post);
  return (
    <div>
      <Header post={post} />
      <div className='container post-container game-container'>
        {
          started ? React.cloneElement(games[name], { stop: () => setStarted(false) }) : (
            <div>
              <button className='button' onClick={() => setStarted(true)}>
                <FaPlay size="3em"/>
              </button>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default GameMainView;
