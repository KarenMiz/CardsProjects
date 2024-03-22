import React from 'react'
import PageHeader from '../Components/PageHeader';
import Cards from '../Components/Cards'

export default function CardPage() {
  return ( <>
    <PageHeader
    title="Cards"
    subtitle="On this page you can find all bussines cards from all categories!"
  />

  <Cards />
  </>
  );
}
  