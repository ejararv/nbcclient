import React from 'react'
import styled from 'styled-components'
import bacground from './../assets/background.png'
import { useSpring, animated } from 'react-spring'



const StyledH1 = styled.h1`
    line-height: 1.5;
    letter-spacing: 1.5;
    font-family: "Monserrat";
    margin-top: 20;
    margin: 20;
`

const StyledH3 = styled.h3`
    line-height: 1.5;
    letter-spacing: 1.5;
    font-family: "Monserrat";
    margin-top: 20;
    margin: 20;
   
   
`

const Container = styled(animated.div)`
    
    display: inline-block;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 2em;
    white-space: normal;
    background: #C7D2FE66;
    border-radius: 20px;
    z-index: 1;
    position: relative;
    backdrop-filter: blur(10px);
    border: 2px solid transparent;
    background-clip: border-box;
    cursor: pointer;
   
`

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


 const Card = ({ name, kod, mid }) => {

    const [state, setState] = useSpring(() => ({xys: [0,0,1] , config:{mass: 10,tension:200, friction:50}}))

    return (
        <Container 
            onMouseMove={({clientX: x, clientY: y}) => (setState({xys: calc(x, y)}))}
            onMouseLeave={() => setState({xys: [0,0,1]})}
            style={{ transform: state.xys.interpolate(trans)}}
            >
            <StyledH1>{name}</StyledH1>
            <StyledH3>{kod}</StyledH3>
            <StyledH3>{mid}</StyledH3>
         </Container>
    )
}

export default Card



// return (
//     <CardColumns style={Styles.card}>
//       <Card>
//         <Card.Body>
//           <Card.Title>{name}</Card.Title>
//           <Card.Subtitle className="mb-2 text-muted">{kod}</Card.Subtitle>
//           <Card.Text>{mid}</Card.Text>
//           <Button onClick={addToFavorite}
//              >
//          <AiFillHeart style={{ color : "red"}}/>
//          </Button>
//          <Button onClick={removeAll}> remove all</Button>
              
          
         
//         </Card.Body>
//       </Card>
//     </CardColumns>
    
    
//   );
// };