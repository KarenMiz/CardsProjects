import { Typography, useMediaQuery } from '@mui/material'


export default function Logo() {
  const isXsScreen = useMediaQuery ((theme)=> theme.breakpoints.dome('xs'));
  return (<>
  
    {!isXsScreen &&
    (<Typography variant='h4' fontFamily={"fantasy"} mr={2}>BCard</Typography>)}
    </>
  );
}
