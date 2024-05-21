import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useCards from "../hooks/useCards";
import Spinner from "../../component/Spinner";
import { Container, Typography, Avatar, Paper, IconButton, CardActions, Tooltip } from "@mui/material";
import { useUser } from "../../users/providers/UserProvider";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function CardDetailsPage() {
    const { id } = useParams();
    const { value, getCardById, handleCardsLike } = useCards();
    const { card } = value;
    const { user } = useUser();
    const [likes, setLikes] = useState([]);
    const [isLiked, setIsLiked] = useState(false);

    useEffect(() => {
        getCardById(id);
    }, [id, getCardById]);

    useEffect(() => {
        if (card && card.likes) {
            setLikes(card.likes);
            setIsLiked(card.likes.includes(user?._id));
        }
    }, [card, user]);

    const handleLike = async () => {
        await handleCardsLike(id);
        setIsLiked((prev) => !prev);
        setLikes((prevLikes) =>
            isLiked ? prevLikes.filter((like) => like !== user?._id) : [...prevLikes, user?._id]
        );
    };

    const countLikes = (likesArray) => {
        if (!Array.isArray(likesArray)) {
            throw new Error("Input must be an array");
        }
        return likesArray.length;
    };

    if (!card) {
        return <Spinner />;
    }

    return (
        <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Avatar
                alt={card.image.alt}
                src={card.image.url}
                sx={{ width: 200, height: 200, mb: 3, marginTop: 2 }}
            />
            <Paper elevation={3} sx={{ p: 3, width: "80%", mb: 5 }}>
                <Typography variant="h4" component="div" gutterBottom
                    sx={{ textTransform: "capitalize" }}>
                    {card.title}
                </Typography>
                <Typography variant="h6" gutterBottom>
                    <strong>Subtitle:</strong> {card.subtitle}
                </Typography>
                <Typography variant="body1" paragraph>
                    <strong>Description:</strong> {card.description}
                </Typography>
                <Typography variant="body2" paragraph>
                    <strong>Address:</strong> {card.address.street} {card.address.houseNumber}, {card.address.city}, {card.address.state}, {card.address.country}, {card.address.zip}
                </Typography>
                <Typography variant="body2" paragraph>
                    <strong>Likes:</strong> {countLikes(likes)}
                </Typography>
                <Typography variant="body2">
                    <strong>Card ID:</strong> {id}
                </Typography>
                <CardActions sx={{justifyContent:"right"}}>
                <Tooltip title={isLiked ? "Remove the card from your favorites" : "Do you like this card?"}>
                    {user && (
                        <IconButton aria-label="Add to favorite" onClick={handleLike}>
                            <FavoriteIcon color={isLiked ? "error" : "inherit"} />
                        </IconButton>
                    )}
                    </Tooltip>
                </CardActions>
            </Paper>
        </Container>
    );
}
