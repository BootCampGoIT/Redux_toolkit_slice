import React from 'react';
import Posts from './posts/Posts';

const App = () => {
  console.dir(process.env.REACT_APP_API_KEY)
  console.dir(process.env)
  return (
    <Posts/>
  );
}

export default App;
