import { useState } from 'react'
import { Container, calc } from './styled'

const BackgroundMotion = () => {
  const [props, set] = useState(() => ([0, 0, 2]))
  const [transform, setTransform] = useState(`translateY( ${ (props[0]) * -1 }px) translateX( ${ props[1] * 2 }px) scale(2)`)
  const [isAnimated, setIsAnimated] = useState(false)
  const [isDisplayedNone, setIsDisplayedNone] = useState(false)

  const handleSetIsAnimated = () => {
    setIsAnimated(!isAnimated)
    setInterval(() => {setIsDisplayedNone(true)}, 6000)
  }

  return (
    <Container
      onMouseMove={({clientX: x, clientY: y}) => {
        set(calc(x, y))
        setTransform(`translateY( ${ (props[0] / 10) * -1 }px) translateX( ${ props[1] * 2 }px) scale(2)`)
      }}
      isAnimated={isAnimated}
      isDisplayedNone={isDisplayedNone}
      
      // onMouseLeave={() => {
          // set([0,0, 1])
          // setTransform(`translateX(${ 0 }px) translateY(${0}px) scale(2)`)
      // }}

      style={{transform: transform}}
    />
  )
}

export default BackgroundMotion