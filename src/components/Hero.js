import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'

import { hero } from './hero.module.css'

import cyberface from '../assets/cyberface.png'
import Bitbucket from '../svgs/bitbucket.svg'
import Github from '../svgs/github.svg'
import Dribbble from '../svgs/dribbble.svg'

const Title1 = styled.span`
  ${tw`block text-header-1-sm lg:text-header-1-lg ml-minus-1_2 lg:ml-minus-2`}
`

const Title2 = styled.span`
  ${tw`block text-header-2-sm lg:text-header-2-lg mt-minus-8 lg:mt-minus-9`}
`

const LinkList = styled.ul`
  ${tw`flex flex-col list-reset absolute pin-l pin-b m-0 pl-4 pb-4`}
`

const ListItem = styled.li`
  ${tw`pt-4 text-primary lg:text-background`}
`

const Img = styled.img`
  ${tw`absolute pin-b pin-r w-full`}
  transform: translate(20%);
  max-width: 600px;
`

const Hero = () => (
  <div className={hero} style={tw`flex relative font-display h-screen px-4`}>
    <h1 style={tw`m-0 uppercase text-primary`}>
      <Title1>Luke</Title1>
      <Title2>Todd</Title2>
    </h1>
    <LinkList>
      <ListItem>
        <Dribbble style={tw`fill-current w-8`} />
      </ListItem>
      <ListItem>
        <Bitbucket style={tw`fill-current w-8`} />
      </ListItem>
      <ListItem>
        <Github style={tw`fill-current w-8`} />
      </ListItem>
    </LinkList>

    <Img src={cyberface} alt="My face" />
  </div>
)

export default Hero
