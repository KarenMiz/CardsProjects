import React from 'react'
import { Box, Divider, Typography } from '@mui/material'

export default function PageHeader({ subtitle, title }) {
  return (
    <>
    <Box sx={{ textAlign:"center"}}>
      <Typography variant="h2" component="h1">{title}</Typography>
      <Typography variant="h5" component="h2">{subtitle}</Typography>
      <Divider sx={{ my: 2}} />
    </Box>
    </>
  ); 
}
