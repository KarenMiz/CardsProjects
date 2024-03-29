import React from 'react'
import ROUTES from './routesModel'
import CardPage from '../Cards/Pages/CardPage'
import AboutPage from '../pages/AboutPage'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../pages/ErrorPage'
import SandBox from '../sandBox/SandBox'

export default function Router() {
  return (
    <div>
       <Routes>
      <Route path={ROUTES.ROOT} element={<CardPage />} />
      <Route path={ROUTES.CARDS} element={<CardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />
      <Route path={ROUTES.SANDBOX} element={<SandBox />} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
    </div>
  );
}
