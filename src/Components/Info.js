import React from 'react'
import '../style.css'
import nath from '../assets/nath.png'
import About from './About'
import Interests from './Interests'
import Footer from './Footer'
import styled from 'styled-components'

const Keyframmes = styled.div`
@media (min-width: 500px){
  .img-div{
   width: 400px;
  }
  .img-div > img{
    width: 350px;
  } 
  .img-div > h1{
    font-size: 2.12rem;
  }
  .img-div > p{
    line-height: 1.5;
    font-size: 1.3rem;
  }
  .footer{
    width:400px;
  }
}
@media (min-width: 1007px){

  .img-div > .link-div{
    margin: 0;
    
  }
}
`
const Info = () => {
  return (
    <div>
      <Keyframmes>
      <div className='img-div'>
        <img src={nath} alt ='profile-pic' />
        <h1>Nathaniel Essien</h1>
        <p className='first-p'>Frontend Developer</p>
        <a href='https://nathaniyell.github.io/sideHustle-Project' className='portfolio'>My Portfolio</a>
        <div className='link-div'>
          <a href='mailto:essien.nathan@yahoo.com' className='mail'><i className="fa-solid fa-envelope"></i> &nbsp;Email</a>
          <a href='https://linkedin.com/in/thaniyell' className='linked'><i className="fa-brands fa-linkedin"></i> &nbsp;LinkedIn</a>
        </div>
        
        <About />
        <Interests />
        <Footer />
      </div>
      </Keyframmes>

    </div>
  )
}

export default Info