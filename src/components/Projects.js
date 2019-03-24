import React from 'react'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import { Spring } from 'react-spring/renderprops'

import Divider from './Divider'
import VisibilitySensor from './VisibilitySensor'

import Message from '../svgs/email.svg'

const Section = styled.section`
  ${tw`flex relative h-full xl:h-screen xl:items-center flex-col xl:flex-row xl:flex-row-reverse xl:flex-wrap px-4`}
  overflow: hidden;
  @media screen and (min-width: 1200px) {
    border-right: 40px solid #31f0c4;
  }
`

const Title = styled.h1`
  ${tw`m-0 font-display text-primary text-title-sm xl:text-title-lg xl:text-left font-medium mt-spacer`}
  opacity: ${props => props.opacity};
  @media screen and (min-width: 1200px) {
    margin-top: 280px;
  }
`

const ProjectList = styled.ul`
  ${tw`list-reset flex flex-wrap text-primary text-xl xl:text-2xl font-sans -mt-8`}
`

const ProjectListItem = styled.li`
  ${tw`text-right whitespace-no-wrap`}
  flex: 1;
  margin-top: 2rem;
  margin-right: 2rem;

  @media screen and (min-width: 1200px) {
    flex: 0 0 33%;
    margin-right: 0;
  }
`

const Project = styled.a`
  ${tw`text-primary relative text-xl`}
  &:hover:after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    width: 100%;
    background-color: #31f0c4;
    height: 4px;
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

const ProjectListContainer = styled.div`
  ${tw`p-4 relative`}
  width: 100%;
  display: flex;
  justify-content: center;

  @media screen and (min-width: 1200px) {
    justify-content: flex-end;
    padding-right: 4rem;
    margin-top: 3.75rem;
  }
`

const MessageBlock = styled.div`
  ${tw`flex justify-center items-center mx-auto mb-6 p-6 xl:p-8 shadow-default`}
  width: 100%;
  background-color: #31f0c4;
  opacity: ${props => props.opacity};
  transform: ${props => props.transform};

  @media screen and (min-width: 1200px) {
    width: 80%;
  }
`

const MessageBlockTitle = styled.h2`
  ${tw`text-background font-display text-xl xl:text-3xl`}
`

const Link = styled.a`
  ${tw`inline-block text-primary ml-4 xl:text-background w-8 xl:w-10`}
  width: ${props => props.width};

  @media screen and (min-width: 1200px) {
    width: ${props => props.largeWidth};
  }
`

const Projects = () => (
  <Section>
    <FlexItem width="40%">
      <VisibilitySensor once partialVisiblity offset={{ bottom: 100 }}>
        {({ isVisible }) => (
          <>
            <Spring
              delay={300}
              to={{
                opacity: isVisible ? 1 : 0,
              }}
            >
              {({ opacity }) => <Title opacity={opacity}>Projects</Title>}
            </Spring>
            <Spring
              delay={300}
              to={{
                transform: isVisible ? 'translateX(0)' : 'translateX(100%)',
              }}
            >
              {({ transform }) => <Divider transform={transform} />}
            </Spring>
          </>
        )}
      </VisibilitySensor>
    </FlexItem>
    <ProjectListContainer>
      <ProjectList>
        <ProjectListItem>
          <Project href="#">SCLU</Project>
        </ProjectListItem>
        <ProjectListItem>
          <Project href="#">Tutorful</Project>
        </ProjectListItem>
        <ProjectListItem>
          <Project href="#">Plusnet</Project>
        </ProjectListItem>
        <ProjectListItem>
          <Project href="#">Another Project</Project>
        </ProjectListItem>
        <ProjectListItem>
          <Project href="#">SCLU</Project>
        </ProjectListItem>
        <ProjectListItem>
          <Project href="#">SCLU</Project>
        </ProjectListItem>
      </ProjectList>
    </ProjectListContainer>
    <VisibilitySensor once>
      {({ isVisible }) => (
        <Spring
          delay={300}
          to={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(-50px)',
          }}
        >
          {({ opacity, transform }) => (
            <MessageBlock opacity={opacity} transform={transform}>
              <MessageBlockTitle>
                For any more info, just get in touch…
              </MessageBlockTitle>
              <Link href="#" width="3rem" largeWidth="5rem">
                <Message />
              </Link>
            </MessageBlock>
          )}
        </Spring>
      )}
    </VisibilitySensor>
  </Section>
)

export default Projects
