import React from 'react';
import './AlignmentExample.css';
import newyorkImage from './images/newyork.jpg';
import parisImage from './images/paris.jpg'; // Fix the import
import londonImage from './images/london.jpg';
import tokyoImage from './images/tokyo.jpg';

function AlignmentExample() {
  const cardsData = [
    {
      id: 1,
      title: 'NEW YORK',
      imageUrl: newyorkImage,
      text: 'New York City comprises 5 boroughs sitting where the Hudson River meets the Atlantic Ocean.',
    },
    {
      id: 2,
      title: 'PARIS',
      imageUrl: parisImage,
      text: 'Paris, France capital, is a major European city and a global center for art, fashion, gastronomy and culture.',
    },
    {
      id: 3,
      title: 'LONDON',
      imageUrl: londonImage,
      text: 'London, the capital of England and the United Kingdom, is a 21st-century city with history back to Roman times.',
    },
    {
      id: 4,
      title: 'TOKYO',
      imageUrl: tokyoImage,
      text: 'Tokyo, Japan’s busy capital, mixes the ultramodern and the traditional, from neon-lit skyscrapers to historic temples.',
    },
  ];

  return (
    <div className="card-group">
      {cardsData.map((card) => (
        <div key={card.id} className="card" style={{ width: '18rem', height: 'fit-content' }}>
          <img src={card.imageUrl} className="card-img-top" alt={card.title} />
          <div className="card-body">
            <h5 className="card-title">{card.title}</h5>
            <p className="card-text">{card.text}</p>
            <a href="/some-destination" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AlignmentExample;
