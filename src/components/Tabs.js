import React from 'react'
import CardItem from './subcomp/CardItem'


const cardsList = [
    {
      id: 1,
      title: 'Sign to Text Converter',
      description:
        'click on this button to convert sign languages to Text ',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/data-scientist-img.png',
      className: 'card-1',
      link:''
    },
    {
      id: 2,
      title: 'Text to Sign Converter',
      description:
        'IoT Developers are professionals who can develop, manage, and monitor IoT devices.',
      imgUrl: 'https://assets.ccbp.in/frontend/react-js/iot-developer-img.png',
      className: 'card-2',
      link:'',
    },
]
const Tabs = () => {


  return (
<div className="list-container">
    <div className="main-container">
      <h1 className="head">...What we Provide...</h1>
      <p className="paragraph">
        There are two sub-categories of sign languages mentioned below, It will redirect you to the webpages of your choice..
      </p>
      <ul className="technology-list">
        {cardsList.map(each => (
            <a href={each.link} style={{cursor:'pointer'}}>
              <CardItem cardsList={each} key={each.id} />
           </a>
        ))}
      </ul>
    </div>
  </div>  )
}

export default Tabs