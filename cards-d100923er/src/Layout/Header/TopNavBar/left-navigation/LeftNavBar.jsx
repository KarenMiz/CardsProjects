import { Box } from '@mui/material'
import React from 'react'
import LogoIcon from '../the-logo/LogoIcon'
import Logo from '../the-logo/Logo'
import NavItem from '../../../../routes/components/NavItem'
import ROUTES from '../../../../routes/routesModel'

export default function LeftNavBar() {
    return (
        <Box>
            <LogoIcon />
            <Logo />
            <NavItem to={ROUTES.CARDS} label={"Cards"} />
            <NavItem to={ROUTES.ABOUT} label={"About"} />
        </Box>
    );
}
