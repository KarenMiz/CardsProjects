import React from 'react'
import CardComponent from './Card/CardComponent';
import { Container, Typography } from '@mui/material';

export default function Cards() {
    const cards = [
        {
          _id: "63765801e20ed868a69a62c4",
          title: "first",
          subtitle: "subtitle",
          description: "testing 123",
          phone: "050-0000000",
          email: "test@gmail.com",
          web: "https://www.test.co.il",
          image: {
            url: "assets/images/business-card-top-image.jpg",
            alt: "Business card image",
          },
          address: {
            state: "",
            country: "country",
            city: "tel-aviv",
            street: "Shinkin",
            houseNumber: 3,
            zip: 1234,
          },
          bizNumber: 1000000,
          user_id: "63765801e20ed868a69a62c2",
        },
        {
          _id: "63765802e20ed868a69a62c5",
          title: "second",
          subtitle: "another subtitle",
          description: "more tests 456",
          phone: "050-1111111",
          email: "secondtest@gmail.com",
          web: "https://www.secondtest.co.il",
          image: {
            url: "assets/images/business-card-top-image.jpg",
            alt: "Second business card image",
          },
          address: {
            state: "state",
            country: "another country",
            city: "jerusalem",
            street: "Herzl",
            houseNumber: 10,
            zip: 5678,
          },
          bizNumber: 2000000,
          user_id: "63765802e20ed868a69a62c3",
        },
        {
          _id: "63765803e20ed868a69a62c6",
          title: "third",
          subtitle: "third subtitle",
          description: "testing 789",
          phone: "050-2222222",
          email: "thirdtest@gmail.com",
          web: "https://www.thirdtest.co.il",
          image: {
            url: "assets/images/business-card-top-image.jpg",
            alt: "Third business card image",
          },
          address: {
            state: "another state",
            country: "third country",
            city: "haifa",
            street: "Allenby",
            houseNumber: 15,
            zip: 91011,
          },
          bizNumber: 3000000,
          user_id: "63765803e20ed868a69a62c4",
        },
        {
          _id: "63765804e20ed868a69a62c7",
          title: "fourth",
          subtitle: "fourth subtitle",
          description: "final test 012",
          phone: "050-3333333",
          email: "fourthtest@gmail.com",
          web: "https://www.fourthtest.co.il",
          image: {
            url: "assets/images/business-card-top-image.jpg",
            alt: "Fourth business card image",
          },
          address: {
            state: "final state",
            country: "fourth country",
            city: "beer-sheva",
            street: "Yehuda",
            houseNumber: 20,
            zip: 121314,
          },
          bizNumber: 4000000,
          user_id: "63765804e20ed868a69a62c5",
        },
      ];
      
      
        const HendelCardsDelete = (id) => {
          console.log("you delete card no" + id);
        };
        const HendelCardsLike = (id) => {
          console.log("you loked card no" + id);
        };
       return cards.length === 0 ?
           (
            <Typography>
              Oooos... is seems there are not business cards to display
            </Typography>
          )
        :
      
        ( <Container sx={{display: "flex"}}>
        {cards.map((card)=>(
        <CardComponent card={card} HendelCardsDelete={HendelCardsDelete} HendelCardsLike={HendelCardsLike}/> 
        ))}
          
        </Container>
      );}
       