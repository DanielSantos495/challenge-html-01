import React, { useState } from 'react';

import '../styles/components/Home.styl';
import initialState from '../../initialState';
import Card from './Card';

const Home = () => {
  const [data] = useState(initialState);
  return (
    <main className="Home Container">
      {data.map(item => (
        <Card key={item.id} {...item} />
      ))}
    </main>
  );
};
export default Home;
