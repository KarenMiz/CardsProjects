import React from 'react'

const getCards = async ()=>{
    const responce = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards");
      const data = responce.data;
 }

 const getCardByCardId = async () => {
    const responce = await axios.get("https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/" + id);
    const data = responce.data;
    setCard(data);
  }
 
export default function cardsApiServices() {
 return {getCardByCardId , getCards}
}
