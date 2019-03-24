import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { hero, sidebar, faceContainer } from './hero.module.css'

import cyberface from '../assets/cyberface.png'
import Bitbucket from '../svgs/bitbucket.svg'
import Github from '../svgs/github.svg'
import Dribbble from '../svgs/dribbble.svg'

const Title = styled.h1`
  ${tw`m-0 uppercase text-primary xl:text-background font-medium`}
`

const Title1 = styled.span`
  ${tw`block text-header-1-sm xl:text-header-1-xl ml-minus-1_2`}
`

const Title2 = styled.span`
  ${tw`block text-header-2-sm xl:text-header-2-xl mt-minus-8 xl:mt-minus-9`}
`

const LinkList = styled.ul`
  ${tw`flex flex-col xl:flex-row list-reset absolute pin-l pin-b m-0 pl-4 pb-4 xl:pl-10 xl:pb-10`}
`

const ListItem = styled.li`
  ${tw`pt-10 xl:pt-0 xl:pr-10`}
`

const Img = styled.img`
  ${tw`w-full`}
  transform: translate(20%);
  max-width: 600px;

  @media screen and (min-width: 1200px) {
    transform: none;
    max-width: 800px;
  }
`

const Link = styled.a`
  ${tw`inline-block text-primary xl:text-background w-8 xl:w-10`}
  width: ${props => props.width};
  transition: transform .3s;
  will-change: transform;

  svg {
    pointer-events: none;
  }

  &:hover {
    transform: scale(1.1);
  }

  @media screen and (min-width: 1200px) {
    width: ${props => props.largeWidth};
  }
`

const Sidebar = styled.div`
  ${tw`flex relative font-display h-full px-4 xl:shadow-default`}
`

const FaceContainer = styled.div`
  ${tw`flex items-end xl:justify-end absolute xl:static pin-b pin-r h-full xl:shadow-default`}
  pointer-events: none;
`

const Hero = () => (
  <header className={hero} style={tw`h-screen`}>
    <Sidebar className={sidebar}>
      <Title>
        <Title1>Luke</Title1>
        <Title2>Todd</Title2>
      </Title>
      <LinkList>
        <ListItem>
          <Link
            href="https://dribbble.com/lukeajtodd"
            aria-label="Dribbble link"
          >
            <Dribbble aria-hidden="true" style={tw`fill-current w-full`} />
          </Link>
        </ListItem>
        <ListItem>
          <Link
            href="https://bitbucket.org/lukeajtodd/"
            aria-label="Bitbucket link"
            largeWidth="35px"
          >
            <Bitbucket aria-hidden="true" style={tw`fill-current w-full`} />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="https://github.com/lukeajtodd" aria-label="Github link">
            <Github aria-hidden="true" style={tw`fill-current w-full`} />
          </Link>
        </ListItem>
      </LinkList>
    </Sidebar>
    <FaceContainer className={faceContainer}>
      <Img src={cyberface} alt="My face" />
    </FaceContainer>
  </header>
)

export default Hero
