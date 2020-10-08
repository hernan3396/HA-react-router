import React from 'react';

function Home({ match }) {
  return <div>{match.url}</div>;
}

export default Home;
