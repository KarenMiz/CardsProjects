import PageHeader from '../../component/PageHeader';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardsFeedback from '../Components/CardsFeedback';

export default function CardPage() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  useEffect(() => {
    const getAllCards = async () => {
      try {
        setError(null);
        const response = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards");
        const data = response.data;
        setCards(data);
        setIsLoading(false)
      } catch (err) {
        setIsLoading(false)
        setError(err.message)
        console.log("error", error);
      }
    };
    getAllCards();
  }, [])

  const handelCardsDelete = (id) => {
    console.log("you delete card no" + id);
  };
  const handelCardsLike = (id) => {
    console.log("you liked card no" + id);
  };

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
    />
  </>
  );
}
