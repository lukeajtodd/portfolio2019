import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from './VisibilitySensor'

import Divider from './Divider'

import Zigzag from '../svgs/zigzag.svg'

const Section = styled.section`
  ${tw`flex relative h-full xl:h-screen xl:items-center flex-col xl:flex-row px-4`}
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

const StyledZigzag = styled(Zigzag)`
  ${tw`relative xl:absolute`}
  height: 60px;

  @media screen and (min-width: 1200px) {
    top: 95%;
    left: 50%;
    transform: translateX(-50%);
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
      <StaticQuery
        query={graphql`
          query {
            gcms {
              page(where: { id: "cjs0n7x25rulg0c15alsk6itc" }) {
                contentTop
                contentMid
                contentBottom
              }
            }
          }
        `}
        render={data =>
          !data.gcms ? (
            'Loading...'
          ) : (
            <VisibilitySensor once>
              {({ isVisible }) => (
                <>
                  <Spring
                    delay={300}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? 'translateY(0)'
                        : 'translateY(200px)',
                    }}
                  >
                    {({ opacity, transform }) => (
                      <Content opacity={opacity} transform={transform}>
                        {data.gcms.page.contentTop}
                      </Content>
                    )}
                  </Spring>
                  <Spring
                    delay={350}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? 'translateY(0)'
                        : 'translateY(200px)',
                    }}
                  >
                    {({ opacity, transform }) => (
                      <Content opacity={opacity} transform={transform}>
                        {data.gcms.page.contentMid}
                      </Content>
                    )}
                  </Spring>
                  <Spring
                    delay={400}
                    to={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible
                        ? 'translateY(0)'
                        : 'translateY(200px)',
                    }}
                  >
                    {({ opacity, transform }) => (
                      <Content opacity={opacity} transform={transform}>
                        {data.gcms.page.contentBottom}
                      </Content>
                    )}
                  </Spring>
                </>
              )}
            </VisibilitySensor>
          )
        }
      />
    </FlexItem>
    <StyledZigzag aria-hidden="true" />
  </Section>
)

export default About
