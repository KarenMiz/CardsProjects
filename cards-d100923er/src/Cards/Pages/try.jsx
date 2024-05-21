import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import Spinner from "../../component/Spinner";
import { Container, Typography, Avatar, Paper } from "@mui/material";

export default function CardDetailsPage() {
    const { id } = useParams();
    const { value, getCardById } = useCards();
    const { card } = value;

    useEffect(() => {
        getCardById(id);
    }, [id, getCardById]);

    function countLikes(likes) {
        if (!Array.isArray(card.likes)) {
            throw new Error("Input must be an array");
        }
        return likes.length;
    }

    if (!card) {
        return <Spinner />;
    }

    return (
        <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar
                alt={card.image.alt}
                src={card.image.url}
                sx={{ width: 200, height: 200, mb: 3 }}
            />
            <Paper elevation={3} sx={{ p: 3, width: "80%" }}>
                <Typography variant="h4" component="div" gutterBottom
                    sx={{ textTransform: "capitalize" }}>
                    {card.title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    <strong>Subtitle:</strong> {card.subtitle}
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Description:</strong>  {card.description}
                </Typography>
                <Typography variant="body2" paragraph>
                    <strong>Address:</strong> {card.address.street} {card.address.houseNumber}, {card.address.city}, {card.address.state}, {card.address.country}, {card.address.zip}
                </Typography>
                <Typography variant="body2" paragraph>
                    <strong>Likes:</strong> {countLikes(card.likes)}
                </Typography>
                <Typography variant="body2">
                    <strong>Card ID:</strong> {id}
                </Typography>
            </Paper>
        </Container>
    );
}
