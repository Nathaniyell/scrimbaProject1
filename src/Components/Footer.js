import React from 'react'
import '../style.css'

const socialLinks = [
  {
    link:'https://twitter.com/_kvngNath', iconName:'fa-twitter'
  },
  {
    link:'tel: 09034940576', iconName:'fa-whatsapp'
  },
  {
    link:'https://github.com/Nathaniyell', iconName:'fa-github'
  }
]
const links = socialLinks.map(item => {
 return <a href={item.link}><i className= {`fa-brands ${item.iconName}`}></i></a>

})

const Footer = () => {

  return (
    <div className='footer'>
      {links}
    </div>
  )
}

export default Footer