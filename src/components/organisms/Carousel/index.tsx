import React, { useState } from 'react'
import Arrow from '../../atoms/ArrowButton'
import HeroSlide from '../../molecules/Slide'
import { Grid, Fade } from '@material-ui/core'

export interface IAppProps {
  slides: Array<any>
}

export default function App(props: IAppProps) {
  const { slides } = props
  const [index, setIndex] = useState(0)
  const numSlides = slides.length
  const [slideIn, setSlideIn] = useState(true)

  const onArrowClick = (direction: any) => {
    const increment = direction === 'left' ? -1 : 1

    const newIndex = (index + increment + numSlides) % numSlides

    setSlideIn(false)

    setTimeout(() => {
      setIndex(newIndex)
      setSlideIn(true)
    }, 500)
  }
  return (
    <Grid container alignItems="center">
      <Grid item xs={1} container alignItems="center">
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Arrow direction="left" onClick={() => onArrowClick('left')} />
        </Grid>
      </Grid>
      <Grid item xs={10}>
        <Fade
          in={slideIn}
          timeout={{ enter: 500, exit: 500 }}
          mountOnEnter
          unmountOnExit
        >
          <div style={{ height: '350px', zIndex: -1 }}>
            <HeroSlide title={slides[index].name} image={slides[index].image} />
          </div>
        </Fade>
      </Grid>
      <Grid item xs={1} container alignItems="center">
        <Grid item xs={12} style={{ textAlign: 'center' }}>
          <Arrow direction="right" onClick={() => onArrowClick('right')} />
        </Grid>
      </Grid>
    </Grid>
  )
}
