import React from 'react'
import './mainn.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'
import img9 from '../../Assets/img9.jpg'

const Data = [
  {
    id:1,
    imgsrc:img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade:'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id:2,
    imgsrc:img2,
    destTitle: 'Machu Pichu',
    location: 'New Zealand',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id:3,
    imgsrc:img3,
    destTitle: 'Eiffel',
    location: 'Paris',
    grade:'CULTURAL RELAX',
    fees: '$900',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id:4,
    imgsrc:img5,
    destTitle: 'Bali',
    location: 'Indonesia',
    grade:'CULTURAL RELAX',
    fees: '$750',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id:5,
    imgsrc:img4,
    destTitle: 'Coleseum',
    location: 'Roma',
    grade:'CULTURAL RELAX',
    fees: '$1100',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id:6,
    imgsrc:img6,
    destTitle: 'London Bridge',
    location: 'England',
    grade:'CULTURAL RELAX',
    fees: '$650',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id:7,
    imgsrc:img7,
    destTitle: 'Great Wall China',
    location: 'China',
    grade:'CULTURAL RELAX',
    fees: '$400',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id:8,
    imgsrc:img8,
    destTitle: 'Borobudur',
    location: 'Indonesia',
    grade:'CULTURAL RELAX',
    fees: '$450',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },
  {
    id:9,
    imgsrc:img9,
    destTitle: 'Cappadocia',
    location: 'turkey',
    grade:'CULTURAL RELAX',
    fees: '$1200',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  },

]

const Main = () => {
  return (
   <section className='main container section'>
    <div className="secTitle">
      <h3 className='title'>
        Most visited destinations
      </h3>
    </div>
    <div className="secContent grid">
      {
        Data.map(({id, imgsrc, destTitle, location, grade, fees, description})=> {
          return(
            <div key={id} className="singleDestination">
                <div className="imagediv">
                  <img src={imgsrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className='icon'/>
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>
                  <div className="desc">
                    <p>{description}</p>
                  </div>
                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className='icon'/>
                  </button>
                </div>
            </div>
          )
        })
      }

    </div>
   </section>
  )
}

export default Main