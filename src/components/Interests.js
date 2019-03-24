import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Spring } from 'react-spring/renderprops'
import VisibilitySensor from './VisibilitySensor'

import TrianglePattern from './TrianglePattern'

const Section = styled.section`
  ${tw`flex relative h-full xl:h-screen xl:items-center xl:justify-center flex-col px-8`}
  @media screen and (min-width: 1200px) {
    border-right: 40px solid #31f0c4;
  }
`

const Content = styled.p`
  ${tw`font-sans text-primary text-center text-xl xl:text-2xl leading-normal mb-0`}
  opacity: ${props => props.opacity};
  transform: ${props => props.transform};
  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`

const ListContainer = styled.div`
  ${tw`w-full flex relative justify-center`}
`

const InterestList = styled.ul`
  ${tw`text-primary font-display list-reset text-interest-sm xl:text-interest-lg text-right mt-spacer-2 mr-4`}
`

const InterestListMirrored = styled.ul`
  ${tw`opacity-25 text-primary font-display list-reset text-interest-sm xl:text-interest-lg text-left mt-spacer-2`}
  display: none;
  @media screen and (min-width: 1200px) {
    display: block;
  }
`

const PushItem = ({ direction, isVisible, delay, ...props }) => (
  <Spring
    delay={delay}
    to={{
      opacity: isVisible ? 1 : 0,
      transform: isVisible
        ? 'translateX(0)'
        : `translateX(${direction === 'left' ? '-100%' : '100%'})`,
    }}
  >
    {({ opacity, transform }) => props.children({ opacity, transform })}
  </Spring>
)

PushItem.propTypes = {
  direction: PropTypes.string.isRequired,
  isVisible: PropTypes.bool,
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  children: PropTypes.func.isRequired,
}

PushItem.defaultProps = {
  isVisible: false,
  delay: 300,
}

const Interests = () => (
  <Section>
    <TrianglePattern left={0} top="100%" />
    <VisibilitySensor once partialVisibility offset={{ bottom: 100 }}>
      {({ isVisible }) => (
        <Spring
          delay={300}
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'scale(1)' : 'scale(1.4)',
          }}
        >
          {({ opacity, transform }) => (
            <Content opacity={opacity} transform={transform}>
              Here are a couple of the things I’m interested in, actively
              learning or working on:
            </Content>
          )}
        </Spring>
      )}
    </VisibilitySensor>
    <ListContainer>
      <StaticQuery
        query={graphql`
          query {
            gcms {
              skills {
                id
                title
              }
            }
          }
        `}
        render={data =>
          !data.gcms ? (
            'Loading...'
          ) : (
            <>
              <InterestList>
                <VisibilitySensor
                  once
                  partialVisibility
                  offset={{ bottom: 200 }}
                >
                  {({ isVisible }) => {
                    let delay = 300
                    return (
                      <>
                        {data.gcms.skills.map(interest => {
                          const comp = (
                            <PushItem
                              direction="left"
                              isVisible={isVisible}
                              delay={delay}
                              key={`list-${interest.id}`}
                            >
                              {({ opacity, transform }) => (
                                <li style={{ opacity, transform }}>
                                  {interest.title}
                                </li>
                              )}
                            </PushItem>
                          )
                          delay += 100
                          return comp
                        })}
                      </>
                    )
                  }}
                </VisibilitySensor>
              </InterestList>
              <InterestListMirrored>
                <VisibilitySensor
                  once
                  partialVisibility
                  offset={{ bottom: 200 }}
                >
                  {({ isVisible }) => {
                    let delay = 300
                    return (
                      <>
                        {data.gcms.skills.map(interest => {
                          const comp = (
                            <PushItem
                              direction="right"
                              isVisible={isVisible}
                              delay={delay}
                              key={`mirrored-${interest.id}`}
                            >
                              {({ opacity, transform }) => (
                                <li style={{ opacity, transform }}>
                                  {interest.title}
                                </li>
                              )}
                            </PushItem>
                          )
                          delay += 100
                          return comp
                        })}
                      </>
                    )
                  }}
                </VisibilitySensor>
              </InterestListMirrored>
            </>
          )
        }
      />
    </ListContainer>
  </Section>
)

export default Interests
