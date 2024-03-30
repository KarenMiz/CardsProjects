import { Typography } from '@mui/material'

import NavBarLink from '../../../../routes/components/NavBarLink';


export default function Logo({ to, sx }) {

  return (
    <>
      <NavBarLink sx={sx} to={to}>
        <Typography variant='h4' sx={{ marginRight: 2, fontFamily: "fantasy", display: { sx: "none", md: "inline-flex" } }}>
          BCard
        </Typography>
      </NavBarLink>

    </> 
  );
}
