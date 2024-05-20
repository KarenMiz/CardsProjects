import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import Spinner from "../../component/Spinner";
import { Container, Box, Typography, Avatar, Paper, Grid } from "@mui/material";
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
        <Container maxWidth="md" sx={{ display: "flex" }}>
            <Box sx={{ my: 1, marginTop: "15ex" }}>
                <Grid container spacing={1}>
                    <Grid item xs={12} md={4}>
                        <Avatar
                            alt={card.image.alt}
                            src={card.image.url}
                            sx={{ width: 200, height: 200 }}
                        />
                    </Grid>
                    <Grid item xs={1} md={8}>
                        <Paper elevation={2} sx={{ p: 2 }}>
                            <Typography variant="h4" component="div" gutterBottom>
                                Title: {card.title}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Sub Title: {card.subtitle}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Description:  {card.description}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Address: {card.address.street}{" "}
                                {card.address.houseNumber}, {card.address.city},{" "}
                                {card.address.state}, {card.address.country},{" "}
                                {card.address.zip}
                            </Typography>
                            <Typography variant="body1" gutterBottom>How many people liked this card?  {countLikes(card.likes)}</Typography>
                            <Typography variant="body1" gutterBottom>Card ID:  {id}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}

