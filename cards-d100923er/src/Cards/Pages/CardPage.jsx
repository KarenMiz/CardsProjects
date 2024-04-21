import PageHeader from '../../component/PageHeader';
import React, { useEffect } from 'react'
import CardsFeedback from '../Components/CardsFeedback';
import useCards from '../hooks/useCards';
import AddNewCardButton from './AddNewCardButton';


export default function CardPage() {
  const { cards, isLoading, error, getAllCards, handelCardsDelete, handleCardLike } = useCards();
  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  useEffect(() => {
    handleCardLike();
  }, [handleCardLike]);

  useEffect(() => {
    getAllCards();
  }, [getAllCards]);


  return (<>
    <PageHeader
      title="Cards"
      subtitle="On This Page You Can Find All Bussines Cards From All Categories"
    />
    <CardsFeedback
      cards={cards}
      handleCardLike={handleCardLike}
      handelCardsDelete={handelCardsDelete}
      isLoading={isLoading}
      error={error}
    />
    <AddNewCardButton />
  </>
  );
}
