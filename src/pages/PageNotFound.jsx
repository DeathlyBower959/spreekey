import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import Parallax from 'parallax-js'

// Images
import BackgroundImage from '../images/Background.png'
import BigPlanet from '../images/BigPlanet.png'
import Drawing from '../images/Drawing.png'
import Glint from '../images/Glint.png'
import SmallPlanet from '../images/SmallPlanet.png'
import Vignette from '../images/Vignette.png'

const LandingPage = () => {
  const [headingBackIn, setHeadingBackIn] = useState(10)

  const navigate = useNavigate()

  useEffect(() => {
    const scene = document.getElementById('parallax_scene')

    if (scene) new Parallax(scene)
  }, [])

  return (
    <SceneWrapper id='parallax_scene'>
      <BackgroundLayer data-depth='0.1'>
        <LazyBGImage src={BackgroundImage} alt='Blue, spacey background' />
      </BackgroundLayer>
      <Layer data-depth='0.2'>
        <LazyBGImage src={SmallPlanet} alt='Smaller, upper planet' />
      </Layer>
      <Layer data-depth='0.2'>
        <LazyBGImage $endOpacity='0.2' src={Vignette} alt='Border vignette' />
      </Layer>
      <Layer data-depth='0.4'>
        <LazyBGImage src={Glint} alt='Lens flare effect' />
      </Layer>
      <Layer data-depth='0.2'>
        <LazyBGImage
          src={BigPlanet}
          alt='Big patchy, blue planet, with glowing highlights above'
        />
      </Layer>
      <Layer data-depth='0.3'>
        <LazyBGImage src={Drawing} alt='Drawing floating above planet' />
      </Layer>
      <ContentLayer data-depth='0.5'>
        <h1>404</h1>
      </ContentLayer>
      <ContentLayer data-depth='0.6'>
        <button
          onClick={() => {
            if (window.history.length > 2) navigate(-1)
            else navigate('/')
          }}
        >
          Go Back
        </button>
      </ContentLayer>
    </SceneWrapper>
  )
}

const LazyBGImage = ({ src, alt, ...props }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <StyledLazyBGImage
      onLoad={() => {
        setLoaded(true)
      }}
      className={loaded ? 'imageLoaded' : ''}
      src={src}
      alt={alt}
      {...props}
    />
  )
}

const StyledLazyBGImage = styled.img`
  transition: opacity 1s ease-in-out, filter 1s ease-in-out;
  opacity: 0;
  filter: blur(30px);

  &.imageLoaded {
    opacity: ${props => props.$endOpacity ?? 1};
    filter: blur(0);
  }
`

const SceneWrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  overflow: hidden;
`

const BackgroundLayer = styled.div`
  user-select: none;

  img {
    width: 110%;
    min-height: 100%;
    margin-top: -60%;

    margin-left: -5%;
  }
  height: 100%;
  width: 100%;

  @media (max-width: 480px) {
    img {
      margin-top: -50%;
    }
  }
  @media (max-width: 370px) {
    img {
      margin-top: -10%;

      height: 110%;
    }
  }

  /* overflow: hidden; */
`

const ContentLayer = styled.div`
  user-select: none;

  h1,
  p,
  button {
    padding: 0.5em;

    background: transparent;
    backdrop-filter: blur(3px);
    border-radius: 8px;
    border: 1px solid #ccc;
    color: #dedede;

    box-shadow: 0px 0px 18px 4px rgba(0, 0, 0, 0.61);
    text-align: center;
  }

  h1 {
    font-size: clamp(5em, 10vw, 10em);
    font-weight: 600;
    letter-spacing: 0.5em;

    text-indent: 0.5em;
    padding: 0.1em 0.4em;
  }

  p {
    font-size: clamp(1em, 10vw, 2em);
    margin-top: 7em;
  }

  button {
    font-size: clamp(1em, 10vw, 2em);
    margin-top: 7em;

    cursor: pointer;
    text-decoration: none;
    pointer-events: all;
  }

  height: 100%;
  width: 100%;

  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Layer = styled.div`
  user-select: none;

  img {
    width: 110%;
    margin-top: -60%;

    margin-left: -5%;
  }

  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1000px) {
    img {
      margin-top: -50%;
    }
  }
  @media (max-width: 768px) {
    img {
      margin-top: -30%;
    }
  }
  @media (max-width: 480px) {
    img {
      margin-top: 0%;
    }
  }
  @media (max-width: 370px) {
    img {
      margin-top: 0%;
      width: 200%;
      margin-left: -75%;
    }
  }

  /* overflow: hidden; */
`

export default LandingPage
