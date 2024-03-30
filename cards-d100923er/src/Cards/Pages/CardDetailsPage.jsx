import { Container, Typography } from '@mui/material';
import React from 'react'
import PageHeader from '../../component/PageHeader';
import { useParams } from 'react-router-dom';

export default function CardDetailsPage() {
    const {id} = useParams();
    return (
        <Container>
            <PageHeader
                title="Card Details"
                subtitle="Here you can find all details aboud specific card"
            />
            <Typography>ID of Card: {id}</Typography>
        </Container>
    );
}
