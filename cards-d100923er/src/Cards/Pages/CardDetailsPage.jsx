import React, { useEffect } from "react";
import Container from "@mui/material/Container";
import PageHeader from "../../component/PageHeader";
import { useParams } from "react-router-dom";
import { Typography } from "@mui/material";
import useCards from "../hooks/useCards";
import Spinner from "../../component/Spinner";

export default function CardDetailsPage() {
    const { id } = useParams();
    const { card, getCardById } = useCards();

    useEffect(() => {
        getCardById(id);
    }, [id, getCardById]);


    if (!card) {
        return <Spinner />;
    }

    return (
        <Container>
            <PageHeader
                title="Card details"
                subtitle="Here you can find all the details about specific card"
            />
            <Typography>details of card {id}</Typography>
            <Typography>details of card {card.title}</Typography>
            <Typography>description of card {card.description}</Typography>
            <img src={card.image.url} alt="Something Nice" />
        </Container>
    );
}
