import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import useCards from '../../Cards/hooks/useCards';
import { useUser } from '../providers/UserProvider';
import useForm from '../../forms/hooks/useForm';
import ROUTES from '../../routes/routesModel';
import { Container } from '@mui/material';
import SignupForm from '../../users/components/SignupForm';
import signupSchema from '../models/signupSchema';
import mapUserToModel from '../helpers/normalization/mapUserToModel';
import useUsers from '../hooks/useUsers';
import initialSignupForm from '../helpers/initialForms/initialSignupForm';
import normalizeUser from '../helpers/normalization/normalizeUser';

export default function EditAccount() {
    const { id } = useParams();
    const { handleUpdateUser, handleGetUser, } = useUsers();
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
    } = useForm(user._id, normalizeUser, (data) =>
        handleUpdateUser(data)
    );


    useEffect(() => {
        handleGetUser(id)
            .then((data) => {
                const modelUser = mapUserToModel(data);
                setData(modelUser);
            });
    }, [handleGetUser, setData, id]);

    console.log();

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
                    onChange={handleChangeCheckBox}
                />
            )}
        </Container>
    );
}
