import React from 'react'
import { Typography } from '@mui/material'
import Cards from './Cards'
import Spinner from '../../component/Spinner'
import Error from '../../component/Error'
export default function CardsFeedback({ handelCardsDelete, handleCardsLike, error, cards, isLoading }) {
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
    return (
    <Cards
     cards={cards} 
     handleCardsLike={handleCardsLike}
     handelCardsDelete={handelCardsDelete} 
      />
    );
  }
  return null;
}




