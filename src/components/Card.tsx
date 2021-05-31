import * as React from 'react';

interface Card {
	name: string,
	email: string,
	id: number
}

const Card: React.SFC<Card> = ({ name, email, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}: string</h2>
        <p>{email}: string</p>
      </div>
    </div>
  );
};

export default Card;