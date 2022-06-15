import React from 'react';
import { Card } from './Card';

export const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(({ email, id, name }) => {
        return <Card key={id} email={email} id={id} name={name} />;
      })}
    </div>
  );
};
