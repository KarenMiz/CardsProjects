import React from 'react'
import Spinner from '../../component/Spinner'
import Error from '../../component/Error'
import { Typography } from '@mui/material'
import Cards from './Cards'


export default function CardsFeedback({ handelCardsDelete, handleCardLike, error, cards, isLoading }) {
  if (isLoading) return <Spinner />
  if (error) return <Error errorMessage={error} />
  if (cards && cards.length === 0) {
    return (
      <Typography m={2}>
        Oooos... is seems there are not business cards to display
      </Typography>
    );
  }
  if (cards) {
    return <Cards cards={cards} handleCardLike={handleCardLike} handelCardsDelete={handelCardsDelete} />;
  }
  return null;
}




