import React from 'react'
import ROUTES from './routesModel'
import CardPage from '../Cards/Pages/CardPage'
import AboutPage from '../Pages/AboutPage'
import { Route, Routes } from 'react-router-dom'
import ErrorPage from '../Pages/ErrorPage'

export default function Router() {
  return (
    <div>
       <Routes>
      <Route path={ROUTES.ROOT} element={<CardPage />} />
      <Route path={ROUTES.CARDS} element={<CardPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage/>} />
      <Route path='*' element={<ErrorPage/>} />
    </Routes>
    </div>
  );
}
