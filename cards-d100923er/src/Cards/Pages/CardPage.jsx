import React from 'react'
import PageHeader from '../../component/PageHeader';
import Cards from '../Components/Cards'

export default function CardPage() {
  return (<>
    <PageHeader
      title="Cards"
      subtitle="On This Page You Can Find All Bussines Cards From All Categories"
    />

    <Cards />
  </>
  );
}
