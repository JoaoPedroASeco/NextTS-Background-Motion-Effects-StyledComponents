import styled from "styled-components"

type HomeContentType = {
  isAnimated?: boolean
  isDisplayedNone?: boolean
}

export const Container = styled.div<HomeContentType>`
  width: 100vw;
  height: 100vh;
  background-image: url('img/beco.jpg');
  overflow: hidden;
  position: relative;

  .caramelo_animation {
    img {
      position: absolute;
      /* height: 325px; */
      width: 150px;
      left: 490px;
      bottom: 300px;
      ${props => props.isAnimated ? "animation-name: 'caramelo'; animation-duration: 1s;" : ''}
      /* ${props => props.isDisplayedNone ? "display: none" : ''} */
    }
  }
`

export const calc = (x: number, y: number) => {
    return [ (y - window.innerHeight / 2) / 1, -(x - window.innerWidth / 2) / 20, 1 ]
}