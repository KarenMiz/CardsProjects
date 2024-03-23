import { Box, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'
 
export default function CardActionBar({ handelCardsDelete, handelCardsLike, cardId }) {
 
    const handleCardEdit = (id) => {
        console.log(`you edit card no` + id);
    }
    return (
        <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
            <Box>
                <IconButton onClick={() => handelCardsDelete(cardId)}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
                <IconButton onClick={() => handleCardEdit(cardId)}>
                    <EditIcon></EditIcon>
                </IconButton>
            </Box>
            <Box>
                <IconButton>
                    <CallIcon></CallIcon>
                </IconButton>
                <IconButton onClick={() => handelCardsLike(cardId)}>
                    <FavoriteIcon></FavoriteIcon>
                </IconButton>
            </Box>
        </CardActions>
    )
}