import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const StyledH1 = styled.h1`
  line-height: 1.5;
  letter-spacing: 1.5;
  justify-content: center;
  font-family: "Monserrat";
  margin-top: 20;
  margin: 20;
  display: flex;
  font-size: inherit;
`;

const StyledH3 = styled.h3`
  line-height: 1.5;
  letter-spacing: 1.5;
  font-family: "Monserrat";

  margin-top: 20;
  margin: 20;
  display: flex;
  white-space: nowrap;
`;

const ContainerBox = styled.div`
  height: auto;
  width: auto;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;

  justify-content: space-between;
`;

const Container = styled(animated.div)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 2em;
  white-space: normal;
  background: ${(props) => (props.bgColor ? "red" : "#c7d2fe66")};
  border-radius: 20px;
  z-index: 1;
  position: relative;
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  background-clip: border-box;
  cursor: pointer;
  width: 30vh;
  height: 30vm;
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

  console.log(isFav);

  const Favorite = () => {
    if (localStorage.getItem(kod) === null) {
      localStorage.setItem(kod, JSON.stringify({ name, kod, mid }));
      setFav((isFav) => true);
    } else {
      localStorage.removeItem(kod);
      setFav(isFav === false);
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
        style={{ transform: state.xys.interpolate(trans) }}
      >
        <StyledH1>{name}</StyledH1>
        <StyledH3>{kod}</StyledH3>
        <StyledH3>{mid}</StyledH3>
      </Container>
    </ContainerBox>
  );
};

export default Card;
