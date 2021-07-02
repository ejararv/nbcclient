import { auto } from "@popperjs/core";
import React from "react";
import { Card, CardColumns, Button} from "react-bootstrap";
import styled from "styled-components";

export const CurrencyList = ({ name, kod, mid, date }) => {
  const fav = JSON.stringify({ name, kod, mid });

  const addToFavorite = () => {
    localStorage.setItem(kod, fav);
  };

  const removeFromFavorite = () => {
    localStorage.removeItem(kod);
  };

  const removeAll = () => {
    localStorage.clear();
  };

  return (
   


    
        
    <CardColumns style={Styles.card}>
      <Card>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{kod}</Card.Subtitle>
          <Card.Text>{mid}</Card.Text>

          <Button onClick={addToFavorite}>Dodaj do obserwowanych</Button>
         
        </Card.Body>
      </Card>
    </CardColumns>
    
    
  );
};

const Styles = {
  card: {
    border: "1px solid red",
    padding: "10px",
    margin: 20 ,
    width: "300px",
    height: "150px",
    whiteSpace: "normal",
    fontSize: "20px",
    margintop: "60px",
    backgroundColor: "#b1b1d6",
   
  },
};
