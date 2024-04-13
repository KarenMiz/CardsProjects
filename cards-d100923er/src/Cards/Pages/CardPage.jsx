import PageHeader from '../../component/PageHeader';
import React, { useEffect } from 'react'
import CardsFeedback from '../Components/CardsFeedback';
import useCards from '../hooks/useCards';


export default function CardPage() {
  const { cards, isLoading, error, getAllCards, handelCardsDelete, handelCardsLike } = useCards();
  useEffect(() => {
    getAllCards();
  }, [getAllCards]);

  useEffect(() => {
    handelCardsLike();
  }, [handelCardsLike]);

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
      handelCardsLike={handelCardsLike}
      handelCardsDelete={handelCardsDelete}
      isLoading={isLoading}
      error={error}
    />
  </>
  );
}
