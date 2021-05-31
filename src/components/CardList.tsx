import * as React from 'react';
import Card from './Card';

// import interface and then use it as a type
import { IRobot } from '../containers/App';

const CardList = ({ robots }: { robots: Array<IRobot>}) => {

  const robotCards = robots.map((user, i) => (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />
        )
  );

  return (
    <div>
      {
        robotCards
      }
    </div>
  );
}

export default CardList;