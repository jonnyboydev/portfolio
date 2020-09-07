import React from 'react';
import './Card.scss';

export default function Card({ data }) {
  return (
    <section className='card'>
      <div className='card-data'>
        <h3 className='card-name'>{data.name}</h3>
        <span>Stack: {data.stack()}</span>
        <div className='card-links'>
          <a href={data.repo}>View Repo</a>
          <a href={data.livelink}>View Live</a>
        </div>
        <p>{data.description}</p>
        <p>{data.secondarydescription}</p>
      </div>

      <img className='card-image' src={data.image()} alt={data.name} />
    </section>
  );
}
