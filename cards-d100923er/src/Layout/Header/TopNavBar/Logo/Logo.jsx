import { Typography, useMediaQuery } from '@mui/material'
import React from 'react'

export default function Logo() {
  const isXsScreen = useMediaQuery ((theme) => theme.breakpoint.down('xs'));
  return (<>
    {!isXsScreen && 
    (<Typography variant='h4' fontFamily={"fantasy"} mr={2}>BCard</Typography>)}
    </>
  );
}
