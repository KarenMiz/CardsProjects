import React from 'react'
import { CardActionArea, Card } from '@mui/material';
import CardBody from './CardBody';
import CardHeaderComponent from './CardHeaderComponent';
import CardActionBar from './CardActionBar';




export default function CardComponent({ card }) {
  return (<>
    <Card sx={{ width: 250, m: 2 }}>
      <CardActionArea>
        <CardHeaderComponent image={card.image} />
        <CardBody
          bizNumber={card.bizNumber}
          title={card.title}
          subtitle={card.subtitle}
          phone={card.phone}
          address={card.address}
          email={card.email}
        />

      </CardActionArea>
      <CardActionBar/>
    </Card>
  </>
  );
}
