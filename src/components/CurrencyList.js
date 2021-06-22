import React from "react";
import { Card, CardColumns, Button } from 'react-bootstrap';


export const CurrencyList = ({ name, kod, mid, date }) => {


    const fav = JSON.stringify({name, kod, mid})
   
    const addToFavorite = () => {
        localStorage.setItem(kod , fav )
    }

    const removeFromFavorite = () => {
        localStorage.removeItem(kod )
    }

    const removeAll = () => {
        localStorage.clear()
    }



  return (

<CardColumns style={Styles.card}>
    <Card >
  <Card.Body >
    <Card.Title>{name}</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">{kod}</Card.Subtitle>
    <Card.Text>
     {mid}
    </Card.Text>
    
    <Button onClick={addToFavorite}>Dodaj do obserwowanych</Button>
    <Button onClick={removeFromFavorite}>Usuń obserwowanych</Button>
    <Button onClick={removeAll}>Usuń Wszystko z obserwowanych</Button>
  </Card.Body>
</Card>
</CardColumns>
    
  );
};

const Styles ={

    card: {
      
    
        border: '1px solid red',
      width: '100%',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      margintop: '60px',
      backgroundColor: "#b1b1d6",
      borderRadius: "10%"
      
     
    },

    
  }