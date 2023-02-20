import React from 'react'
import './mainn.css'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img from '../../Assets/img.jpg'

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
  // {
  //   id:2,
  //   imgsrc:img,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade:'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  // },
  // {
  //   id:3,
  //   imgsrc:img,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade:'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  // },
  // {
  //   id:4,
  //   imgsrc:img,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade:'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  // },
  // {
  //   id:5,
  //   imgsrc:img,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade:'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  // },
  // {
  //   id:6,
  //   imgsrc:img,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade:'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  // },
  // {
  //   id:7,
  //   imgsrc:img,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade:'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  // },
  // {
  //   id:8,
  //   imgsrc:img,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade:'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  // },
  // {
  //   id:9,
  //   imgsrc:img,
  //   destTitle: 'Bora Bora',
  //   location: 'New Zealand',
  //   grade:'CULTURAL RELAX',
  //   fees: '$700',
  //   description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities. '
  // },

]

const Main = () => {
  return (
   <section className='main container section'>
    <div className="secTitle">
      <h3 className='title'>
        Most visited destinations
      </h3>
    </div>
    <div className="seeContent grid">
      {
        Data.map(({id, imgsrc, destTitle, location, grade, fees, description})=> {
          return(
            <div className="singleDestination">
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