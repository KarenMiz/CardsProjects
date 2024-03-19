import React from 'react'
import { CardActionArea, Card } from '@mui/material';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import ActionBar from './ActionBar';




export default function CardComponent({ card }) {
  return (<>
    <Card sx={{ width: 250, m: 2 }}>
      <CardActionArea>
        <CardHeader image={card.image} />
        <CardBody
          bizNumber={card.bizNumber}
          title={card.title}
          subtitle={card.subtitle}
          phone={card.phone}
          address={card.address}
          email={card.email}
        />

      </CardActionArea>
      <ActionBar />
    </Card>
  </>
  );
}
