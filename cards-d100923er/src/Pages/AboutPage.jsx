import { Typography } from '@mui/material'
import React from 'react'
import PageHeader from '../component/PageHeader'

export default function AboutPage() {
  return (<>
    <PageHeader
      title="About Page"
      subtitle="On this page you can find explanations about using the application"
    />
    <Typography>About page</Typography>

  </>
  );
}
