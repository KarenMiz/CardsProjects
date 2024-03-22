import { Box, CardActions, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CallIcon from '@mui/icons-material/Call';
import FavoriteIcon from '@mui/icons-material/Favorite';
import React from 'react'
 
export default function CardActionBar({ handelCardsDelete, handelCardsLike, cardID }) {
 
    const handleCardEdit = (id) => {
        console.log(`you edit card no` + (id));
    }
    return (
        <CardActions sx={{ paddingTop: 0, justifyContent: "space-between" }}>
            <Box>
                <IconButton onClick={() => handelCardsDelete(cardID)}>
                    <DeleteIcon></DeleteIcon>
                </IconButton>
                <IconButton onClick={() => handleCardEdit(cardID)}>
                    <EditIcon></EditIcon>
                </IconButton>
            </Box>
            <Box>
                <IconButton>
                    <CallIcon></CallIcon>
                </IconButton>
                <IconButton onClick={() => handelCardsLike(cardID)}>
                    <FavoriteIcon></FavoriteIcon>
                </IconButton>
            </Box>
        </CardActions>
    )
}