import React from 'react';
import Card from './Card.js';
// import './Tours.css'; // Make sure this is the correct path if you're using any CSS

function Tours({ tours, removeTour }) {
  return (
    <div className='container'>
      <div>
        <h2 className='title'>Plan with Sarthak</h2>
      </div>
      <div className='cards'>
        {tours.map((tour) => {
          return <Card key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </div>
  );
}

export default Tours;
