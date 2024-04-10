import axios from "axios";
import { useCallback, useState } from "react";


export default function useCards() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // פונקציה שמביאה את כל הכרטיסים
  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true)
      const responce = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards");
      const data = responce.data;
      setCards(data);

    } catch (err) {
      setError(err.message)
    }
    setIsLoading(false)
  }, []);

  // פונקציה שמביאה את הכרטיס לפי איידי ספציפי
  const getCardById = async (id) => {
    try {
      setError(null)
      setIsLoading(true)
      const responce = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + id);
      const data = responce.data;
      setCard(data);
    }
    catch (err) {
      setError(err.message)
    }
    setIsLoading(false);
  };

  const handelCardsDelete = (id) => {
    console.log("you delete card no" + id);
  };
  const handelCardsLike = (id) => {
    console.log("you liked card no" + id);
  };

  return { card, cards, error, isLoading, getAllCards, getCardById, handelCardsLike, handelCardsDelete };
}
