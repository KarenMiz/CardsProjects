import React, { useEffect, useState } from 'react'
import axios from "axios";

export default function Countries() {
  const [countreisList , setcountreisList] = useState ([]);

  const getAllCountreis = async () => {
    const response = await axios.get ("https://restcountries.com/v3.1/all")
    const data = response.data;
    setcountreisList(data)
  };
  
  useEffect (()=> {
    console.log("The Component Is Up!");},[])
  return (
    <div>Countries!</div>
  )
}
