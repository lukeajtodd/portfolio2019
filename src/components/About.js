import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from './VisibilitySensor'

import Divider from './Divider'

const Section = styled.section`
  ${tw`flex h-full xl:h-screen xl:items-center flex-col xl:flex-row px-4`}
  @media screen and (min-width: 1200px) {
    border-right: 40px solid #31f0c4;
  }
`

const Title = styled.h1`
  ${tw`m-0 font-display text-primary text-title-sm xl:text-title-lg xl:text-right font-medium mt-spacer`}
  opacity: ${props => props.opacity};
  transform: ${props => props.transform};
  @media screen and (min-width: 1200px) {
    margin-top: 280px;
  }
`

const Content = styled.p`
  ${tw`font-sans text-primary text-lg xl:text-xl leading-normal`}
  opacity: ${props => props.opacity};
  transform: ${props => props.transform};
  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`

const FlexItem = styled.div`
  ${tw`p-4 relative`}
  width: ${props => props.width};
  height: ${props => props.height};
  display: ${props => props.display};
  flex-direction: column;
  @media screen and (min-width: 1200px) {
    align-items: center;
  }
`

const About = () => (
  <Section>
    <FlexItem width="30%" height="100%">
      <VisibilitySensor once>
        {({ isVisible }) => (
          <>
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
              }}
            >
              {({ opacity }) => <Title opacity={opacity}>About</Title>}
            </Spring>
            <Spring
              delay={300}
              to={{
                transform: isVisible ? 'translateX(0)' : 'translateX(-100%)',
              }}
            >
              {({ transform }) => <Divider side="left" transform={transform} />}
            </Spring>
          </>
        )}
      </VisibilitySensor>
    </FlexItem>
    <FlexItem display="flex">
      <VisibilitySensor once>
        {({ isVisible }) => (
          <>
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(200px)',
              }}
            >
              {({ opacity, transform }) => (
                <Content opacity={opacity} transform={transform}>
                  I’m an experienced web developer currently working remotely
                  for an agency called Evoluted.
                </Content>
              )}
            </Spring>
            <Spring
              delay={350}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(200px)',
              }}
            >
              {({ opacity, transform }) => (
                <Content opacity={opacity} transform={transform}>
                  I love working with the web, every new challenge that presents
                  itself and the multitude of different technologies to get
                  stuck into.
                </Content>
              )}
            </Spring>
            <Spring
              delay={400}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(200px)',
              }}
            >
              {({ opacity, transform }) => (
                <Content opacity={opacity} transform={transform}>
                  Speaking of, I love working with Javascript. I know it can be
                  a bit of a Marmite language sometimes but when done right it
                  feels great.
                </Content>
              )}
            </Spring>
          </>
        )}
      </VisibilitySensor>
    </FlexItem>
  </Section>
)

export default About
