import React from 'react'
import '../style.css'
import Styled from 'styled-components'

const StyledAbout = Styled.div`
  width: 100%;
  color: #fff;
  text-align: left;
  line-height: 1.5;
  h1{
    line-height: 2;
    font-size: 24px;
    font-weight: 700;
  }

`
const About = () => {
  return (
    <StyledAbout>
    <div className='about'>
      <h1>About</h1>
      <p>I am a frontend developer with particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and I am always looking for new things to learn</p>     
    </div>
    </StyledAbout>

  )
}

export default About