import { useCallback, useState } from "react";
import { useUser } from "../providers/UserProvider";
import { editUser, getUserData, login, signup } from "../services/uesersApiService";
import {
    getUser,
    removeToken,
    setTokenInLocalStorage,
} from "../services/localStorageServices";

import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useSnack } from "../../providers/SnackbarProvider";


const useUsers = () => {
    const [isLoading, setIsLoading] = useState();
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    const {  setUser, setToken } = useUser();
    const setSnack = useSnack();

    const handleLogin = useCallback(
        async (userLogin) => {
            setIsLoading(true);
            try {
                const token = await login(userLogin);
                setTokenInLocalStorage(token);
                setToken(token);
                setUser(getUser());
                navigate(ROUTES.CARDS);
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        },
        [setToken, setUser, navigate]
    );

    const handleLogout = useCallback(() => {
        removeToken();
        setUser(null);
    }, [setUser]);

    const handleSignup = useCallback(
        async (userFromClient) => {
            setIsLoading(true);
            try {
                const normalizedUser  = normalizeUser(userFromClient);
                await signup(normalizedUser );
                await handleLogin({
                    email: userFromClient.email,
                    password: userFromClient.password,
                });
            } catch (error) {
                setError(error.message);
            }
            setIsLoading(false);
        },
        [handleLogin]
    );

    const handleGetUser = useCallback(async (id) => {
        try {
          const userData = await getUserData(id);
          setIsLoading(false);
          setError(null);
          return userData;
        } catch (error) {
          setIsLoading(false);
          setError(error);
        }
      }, []);


      const handleUpdateUser = useCallback(
        async (cardId, cardFromClient) => {
          setIsLoading(true);
    
          try {
            const userData = await editUser(cardId, normalizeUser(cardFromClient));
            setUser(getUser());
            setSnack("success", "The business card has been successfully updated");
            setTimeout(() => {
              navigate(ROUTES.ROOT);
            }, 1000);
            return userData;
          } catch (error) {
            setError(error.message);
          }
          setIsLoading(false);
        },
        [setSnack, navigate]
      );

    return {  isLoading, error, handleLogin, handleLogout, handleSignup,handleGetUser,handleUpdateUser };
};

export default useUsers;