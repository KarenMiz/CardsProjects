import React from 'react'
import { CardActionArea, Card } from '@mui/material';
import CardBody from './CardBody';
import CardHeaderComponent from './CardHeaderComponent';
import CardActionBar from './CardActionBar';
import { useNavigate } from 'react-router-dom';
import ROUTES from "../../../routes/routesModel";




export default function CardComponent({ card, handelCardsDelete, handelCardsLike }) {
  const navigate = useNavigate();
  return (<>
    <Card sx={{ width: 250, m: 2 }}>
      <CardActionArea
      onClick={() => navigate(ROUTES.CARD_INFO + "/" + card._id)}
      >
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
      <CardActionBar
        handelCardsLike={handelCardsLike}
        handelCardsDelete={handelCardsDelete}
        cardId={card._id}
      />
    </Card>
  </>
  );
}
