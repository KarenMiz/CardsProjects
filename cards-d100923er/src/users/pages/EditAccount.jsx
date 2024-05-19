import React, { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useUser } from '../providers/UserProvider';
import useForm from '../../forms/hooks/useForm';
import ROUTES from '../../routes/routesModel';
import { Container } from '@mui/material';
import SignupForm from '../../users/components/SignupForm';
import signupSchema from '../models/signupSchema';
import mapUserToModel from '../helpers/normalization/mapUserToModel';
import useUsers from '../hooks/useUsers';
import normalizeUser from '../helpers/normalization/normalizeUser';
import userEditSchema from '../models/userEditSchema';
import initialSignupForm from '../helpers/initialForms/initialSignupForm';
import UserEditForm from '../components/UserEditForm';

export default function EditAccount() {
    const { handleUpdateUser, handleGetUser, } = useUsers();
    const { user } = useUser();
    const {
        data,
        errors,
        handleChange,
        handleReset,
        validateForm,
        onSubmit,
        handleChangeCheckBox,
        setData,
    } = useForm(initialSignupForm, userEditSchema, (userDeatails) =>
        handleUpdateUser(user._id, userDeatails)
    );

    console.log(user._id);
    useEffect(() => {
        if (user)
            handleGetUser(user._id)
                .then((userDeatails) => {
                    const modelUser = mapUserToModel(userDeatails);
                    setData(modelUser);
                });
    }, [handleGetUser, user]);


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
                <UserEditForm
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
