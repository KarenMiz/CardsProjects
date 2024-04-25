import { useCallback, useState } from "react";
import { getCards, editCard, getCard, createCard } from "../services/cardsApiServices";
import { useSnack } from "../../providers/SnackbarProvider";
import ROUTES from "../../routes/routesModel";
import { useNavigate } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import normalizeCard from "../helpers/normalization/normalizeCard";


export default function useCards() {
  const [card, setCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const setSnack = useSnack();
  const navigate = useNavigate();

  useAxios();
  // פונקציה שמביאה את כל הכרטיסים
  const getAllCards = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true)
      const data = await getCards();
      setCards(data);
      setSnack("success", "All the cards are here");

    } catch (err) {
      setError(err.message)
    }
    setIsLoading(false)
  }, [setSnack]);

  // פונקציה שמביאה את הכרטיס לפי איידי ספציפי
  const getCardById = useCallback(async (id) => {
    try {
      setError(null)
      setIsLoading(true)
      const data = await getCard(id);
      setCard(data);
    }
    catch (err) {
      setError(err.message)
    }
    setIsLoading(false);
  }, []);

  const handleUpdateCard = useCallback(
    async (cardId, cardFromClient) => {
      setIsLoading(true);

      try {
        const card = await editCard(cardId, normalizeCard(cardFromClient));
        setCard(card);
        setSnack("success", "The business card has been successfully updated");
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
        const card = await createCard(normalizeCard(cardFromClient));
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




  return { card, cards, error, isLoading, getAllCards, getCardById, handleCardLike, handelCardsDelete, handleCreateCard, handleUpdateCard };
}
