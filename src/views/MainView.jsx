import React from 'react';
import Header from '../components/Header';
import PostList from '../components/PostList';
import data from '../posts/posts.json';

const MainView = () => {
  return (
    <div>
      <Header main={{ name: "Soong Kim", job: "Developer", github: "https://github.com/soong-kim" }} />
      <div className="container">
      </div>
      <PostList posts={data['posts']}/>
    </div>
  );
};

export default MainView;
