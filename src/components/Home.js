import React from 'react';
import Books from './Books';
import AddBooks from './AddBooks';
import '../styles/Home.css';

function Home() {
  return (
    <section className="home__container">
      <Books />
      <hr />
      <AddBooks />
    </section>
  );
}

export default Home;
