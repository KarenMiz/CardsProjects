import { Container, Typography } from '@mui/material';
import React, { useEffect } from 'react'
import PageHeader from '../../component/PageHeader';
import { useParams } from 'react-router-dom';
import useCards from '../hooks/useCards';
import Spinner from '../../component/Spinner';
import Error from '../../component/Error';

export default function CardDetailsPage() {
    const { id } = useParams();
    const { card, isLoading, error, getCardById} = useCards();
    useEffect(() => {
        getCardById(id);
    }, [id])

    if (isLoading) return <Spinner />;
    if (error) return <Error errorMessage={error} />;
    
    return (
        <Container>
            <PageHeader
                title="Card Details"
                subtitle="Here you can find all details aboud specific card"
            />
            <Typography>ID of Card: {id}</Typography>
            <Typography>Details of Card: {card.title}</Typography>
        </Container>
    );
}
