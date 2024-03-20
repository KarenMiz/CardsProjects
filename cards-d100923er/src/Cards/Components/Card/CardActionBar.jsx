import { Box, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'
 
export default function CardActionBar({ handleCardDelete, handleCardLike, cardId }) {
 
    const handleCardEdit = (_id) => {
        console.log(`you edit card no ${_id}`);
    }
    return (
        <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
            <Box>
                <IconButton onClick={() => handleCardDelete(cardId)}>
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
                <IconButton onClick={() => handleCardLike(cardId)}>
                    <FavoriteIcon></FavoriteIcon>
                </IconButton>
            </Box>
        </CardActions>
    )
}