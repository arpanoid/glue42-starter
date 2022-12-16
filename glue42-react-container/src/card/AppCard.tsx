import { GlueContext, useGlue } from '@glue42/react-hooks';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './AppCard.css';
import { startApp } from './glue';

const AppCard = ({ cardTitle, cardDescription, details }: App) => {
  
  const handleCardClick = useGlue(startApp);
  const rndInt = Math.floor(Math.random() * 10) + 1

  return (
    <div>
      <Card style={{ width: '18rem' }} bg="dark" text="white" className="mb-3" border="warn">
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardDescription}</Card.Text>
        <Button className='btn' onClick={() => handleCardClick(cardTitle, details.url)}>Open {cardTitle}</Button>
      </Card.Body>
    </Card>
    </div>
  );
};

export default AppCard;

export type AppDetails = {
  url: string;
  [key: string]: any;
};

export type App = {
  cardTitle: string,
  cardDescription: string,
  details: AppDetails
}
