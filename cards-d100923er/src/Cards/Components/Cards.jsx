import CardComponent from './Card/CardComponent';
import { Container } from '@mui/material';
import React from 'react';

export default function Cards({ cards, handelCardsDelete, handleCardLike }) {
  return (
    <Container sx={{ display: "flex", flexWrap: "wrap" }}>
      {cards.map((card) => (
        <CardComponent
          key={card._id}
          card={card}
          handelCardsDelete={handelCardsDelete}
          handleCardLike={handleCardLike}
        />
      ))}
    </Container>
  );
}
