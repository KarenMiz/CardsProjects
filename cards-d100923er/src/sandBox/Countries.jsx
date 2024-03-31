import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Box, Typography } from '@mui/material';

export default function Countries() {
  const [countreisList, setcountreisList] = useState([]);
  useEffect(() => {
    const getAllCountreis = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        const data = response.data;
        setcountreisList(data);
      }
      catch (error) {
        console.log("error", error);
      }
    };

    getAllCountreis(); // הפעלה של הפונקציה אחרי שהגדרתי בשורה 8
  }, []);

  return (
    <div>
      {countreisList.length === 0 ?
        (<Typography>טוען..</Typography>) :
        (countreisList.map((country, index) => (
          <Box key={index}>
            <Typography>{country.name.common}</Typography>
          </Box>
        )))}
    </div>
  );
}
