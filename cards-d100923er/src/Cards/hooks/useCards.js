import { useCallback, useState } from "react";
import { getCards, getCard, createCard } from "../services/cardsApiServices";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";


export default function useCards() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const setSnack = useSnack();
  const navigate =useNavigate();

  useAxios();
  // פונקציה שמביאה את כל הכרטיסים
  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true)
      const data = await getCards();
      setCards(data);

    } catch (err) {
      setError(err.message)
    }
    setIsLoading(false)
  }, []);

  // פונקציה שמביאה את הכרטיס לפי איידי ספציפי
  const getCardById = useCallback(async (id) => {
    try {
      setError(null)
      setIsLoading(true)
      const data = await getCard();
      setCard(data);
    }
    catch (err) {
      setError(err.message)
    }
    setIsLoading(false);
  }, []);

  const handelCardsDelete = useCallback((id) => {
    console.log("you delete card no" + id);
  }, []);
  const handleCardLike = useCallback((id) => {
    console.log("you liked card no" + id);
  }, []);

  const handleCreateCard = useCallback(
    async (cardFromClient) => {
      setError(null);
      setIsLoading(true);

      try {
        const card = await createCard(cardFromClient);
        setCard(card);
        setSnack("success", "A new business card has been created");
        setTimeout(() => {
          navigate(ROUTES.ROOT);
        }, 1000);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    },
    [setSnack, navigate]
  );




  return { card, cards, error, isLoading, getAllCards, getCardById, handleCardLike, handelCardsDelete, handleCreateCard };
}
