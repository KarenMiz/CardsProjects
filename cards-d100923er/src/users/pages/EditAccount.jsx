import React, { useEffect} from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useCards from '../../Cards/hooks/useCards';
import { useUser } from '../providers/UserProvider';
import useForm from '../../forms/hooks/useForm';
import ROUTES from '../../routes/routesModel';
import { Container } from '@mui/material';
import SignupForm from '../../users/components/SignupForm';
import initialSignupForm from '../helpers/initialForms/initialSignupForm';
import signupSchema from '../models/signupSchema';
import mapUserToModel from '../helpers/normalization/mapUserToModel';

export default function EditAccount() {
    const { id } = useParams();
    const { handleUpdateCard, getCardById, value, } = useCards();
    const { card } = value;
    const { user } = useUser();
    const {
        data,
        errors,
        setData,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
        handleChangeCheckBox,
    } = useForm(initialSignupForm, signupSchema, (newCard) =>
     handleUpdateCard(card._id, newCard)
    );

    useEffect(() => {
        getCardById(id)
            .then((data) => {
                const modelUser = mapUserToModel(data);
                setData(modelUser);
            });
    }, [getCardById, setData, id]);


    if (!user) return <Navigate replace to={ROUTES.CARDS} />;
    return (
        <Container
            sx={{
                paddingTop: 8,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {data && (
                <SignupForm
                    title="Edit Account"
                    onSubmit={onSubmit}
                    onReset={handleReset}
                    errors={errors}
                    validateForm={validateForm}
                    onInputChange={handleChange}
                    data={data}
                    // onChange={handleChangeCheckBox}
                />
            )}
        </Container>
    );
}
