import React, {  useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import {BsFillHeartFill} from "react-icons/bs"

export const StyledH1 = styled.h1`
  line-height: 1.5;
  letter-spacing: 1.5;
  justify-content: center;
  font-family: "Monserrat";
  margin-top: 20;
  margin: 20;
  display: flex;
  font-size: inherit;
`;

export const StyledH3 = styled.h3`
  line-height: 1.5;
  letter-spacing: 1.5;
  font-family: "Monserrat";

  margin-top: 20;
  margin: 20;
  display: flex;
  white-space: nowrap;
`;

export const ContainerBox = styled.div`
  margin-right: -20px;
  height: auto;
  width: auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
`;

export const Container = styled(animated.div)`
  display: block;
  margin: 0 20px 20px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2rem;
  white-space: normal;
  background:  "#c7d2fe66";                               //${(props) => (props.bgColor ? "red" : "#c7d2fe66")};
  border-radius: 20px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
  width: 30vh;
  height: 30vm;
  max-height: 30vh;
  white-space: normal;
`;





const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1,
];
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;



  

const Card = ({ name, kod, mid }) => {
  const [state, setState] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 10, tension: 200, friction: 50 },
  }));
  const [isFav, setFav] = useState(false);
  const [color, setColor] = useState("#c7d2fe66")

  

  useEffect(() => {
    if(localStorage.getItem(kod) === null){
      setColor("#c7d2fe66", kod)
      setFav(true)
    } else {
      setColor("red")
      setFav(false)
    }
  })
  
  const Favorite = () => {
    if (localStorage.getItem(kod) === null) {
      localStorage.setItem(kod, JSON.stringify({ name, kod, mid }));
      setFav(isFav === true);
      setColor("red")
    } else {
      localStorage.removeItem(kod);
      setFav(isFav === false);
      setColor("#c7d2fe66")
    }
  };

  

  return (
    <ContainerBox>
      <Container
        onClick={Favorite}
        onMouseMove={({ clientX: x, clientY: y }) =>
          setState({ xys: calc(x, y) })
        }
        onMouseLeave={() => setState({ xys: [0, 0, 1] })}
        style={{background: "#c7d2fe66", transform: state.xys.interpolate(trans) }}
      >
        <StyledH1>{name}</StyledH1>
        <StyledH3>{kod}</StyledH3>
        <StyledH3>{mid}</StyledH3>
        <BsFillHeartFill style={{color : color}}></BsFillHeartFill>
      </Container>
    </ContainerBox>
  );
};

export default Card;
