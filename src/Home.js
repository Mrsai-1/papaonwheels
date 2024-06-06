import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


import Carousel from 'react-bootstrap/Carousel';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Home.css'
import Curosel1 from './images/Web banners 1 copy.jpg'
import Curosel2 from './images/Chess 2.jpg'
import Curosel3 from './images/Banner web.jpg'
import {useRef} from 'react'


import Envornment from './images/Web icons-03.png'
import security from './images/Web icons-02.png'
import Design from './images/Web icons-04.png'
import MadeInIndia from './images/Web icons-01.png'



 function Home(){
    return(
        <div>
        <div className='Curosel-Fluid'>
        <div className='container'><br/>
            <FirstComponent/>
            </div>
            </div>
            <br></br>
            <div className='Lable-display'>
                <LabelDisplay/>
            </div><br></br>
            <Asserts/><br></br>
            <div className='Brands-display'>
            <BrandsDisplay/>
            </div>
           
            <div className='container'>
            <RecipeCarousel/>
            </div>
            
           
            </div>
    )
 
}

function FirstComponent(){
    return(
        <Carousel fade>
        <Carousel.Item>
        <img
            className="d-block w-100"
             src={Curosel1}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
             src={Curosel2}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
        <img
            className="d-block w-100"
             src={Curosel3}
            alt="First slide"
          />
          {/* <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    )
    
}

function LabelDisplay(){
    return(
        <div className='Div-Label'>
           <div className='text-center text-responsive label-Content' style={{fontWeight:'900'}}>Everything For every Tot</div>
        </div>
    )
}

function Asserts(){
    return(
        <div className='container'>
            <div className='row'>
                <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'>
                <img src={Design} alt="" className='text-center assers'/>
                <h4 className='text-center text-danger' style={{fontWeight:'bold',fontSize:'32px'}}>Disign</h4>
                <p className='text-justify text-center wrigting'>We're committed to design new toys for kids that promote positive development & growth in young minds. Our toys are carefully crafted to provide children with the tools they need to thrive.</p>
                </div>
                <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'>
                <img src={security} alt="" className='text-center assers'/>
                <h4 className='text-center text-danger' style={{fontWeight:'bold',fontSize:'32px'}}>Safety</h4>
                <p className='text-justify text-center wrigting'>All of our toys are rigorously tested to ensure that they meet or exceed the highest safety standards. Child safety is our top priority while making toys for young boys and girls.</p>
                </div>
                <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'>
                    <img src={Envornment} alt="" className='text-center assers'/>
                    <h4 className='text-center text-danger' style={{fontWeight:'bold',fontSize:'32px'}}>Eco-Friendly</h4>
                    <p className='text-justify text-center wrigting'>We promote sustainability through our use of solar energy, eco-friendly FSC certified materials, recycled and recyclable materials and responsible waste management.</p>
                </div>
                <div className='col-xs-12 col-sm-3 col-md-3 col-lg-3'>
                <img src={MadeInIndia} alt="" className='text-center assers'/>
                <h4 className='text-center text-danger' style={{fontWeight:'900',fontSize:'32px'}}>Made In India</h4>
                <p className='text-center text-justify wrigting'>All our products are proudly researched, conceptualized, designed & manufactured in our facilities in India. Webby Toys are available for kids of all ages.</p>

                </div>
            </div>
        </div>
    )
}

function BrandsDisplay(){
    return(
        <div className='Brands-Label'>
           <div className='text-center text-responsive Brands-Content' style={{fontWeight:'900'}}>Brands We Collaborate With</div>
        </div>
    )
}

// const RecipeCarousel = () => {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 3, // Show 3 images at a time
//       slidesToScroll: 1,
//       autoplay: true,
//       autoplaySpeed: 1000,
//     };
  
//     return (
//       <Slider {...settings}>
//         <div>
//         <img src={resCur1} alt="Recipe 1"/>
//         </div>
//         <div>
//         <img src={resCur1} alt="Recipe 2"/>
//         </div>
//         <div>
//           <img src={resCur1} alt="Recipe 3"/>
//         </div>
//         <div>
//           <img src='https://via.placeholder.com/432x192' alt="Recipe 4"/>
//         </div>
//         <div>
//           <img src='https://via.placeholder.com/432x192' alt="Recipe 5"/>
//         </div>
//       </Slider>
//     );
//   };

const RecipeCarousel = () => {
  const recipes = [
    { 
      name: 'ItamName 1',
      image: "./images/FS_LOGO_PNG.png",
      description: 'Description of recipe 1',
      link: '/recipe1'
    },
    { 
      name: 'ItamName 2',
      image: "./images/images.png",
      description: 'Description of recipe 2',
      link: '/recipe2'
    },
    { 
      name: 'ItamName 3',
      image: "./images/downloading.jpeg",
      description: 'Description of recipe 3',
      link: '/recipe3'
    },
    { 
      name: 'ItamName 4',
      image: "./images/download.png",
      description: 'Description of recipe 3',
      link: '/recipe4'
    },
    // Add more recipes as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const sliderRef = useRef(null);

  const slickNext = () => {
    sliderRef.current.slickNext();
  };

  const slickPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
    <div className="recipe-carousel-container">
      <Slider ref={sliderRef} {...settings}>
        {recipes.map((recipe, index) => (
          <div key={index}>
            <div className="recipe-card">
              <img src={recipe.image} alt={recipe.name} className="img-fluid shopby_category_inner_card_img w-100" />
              <div className="recipe-details">
               
              </div>
            </div>
          </div>
        ))}
      </Slider>
      
      <button className="prev-button" onClick={slickPrev}>
          <FontAwesomeIcon icon={faArrowLeft} style={{ backgroundColor: 'black' }} />
        </button>
        
        {/* Right button */}
        <button className="next-button" onClick={slickNext}>
          <FontAwesomeIcon icon={faArrowRight} style={{ backgroundColor: 'black' }} />
        </button>
    </div><br></br>
    
    </>
  );
};

export default Home






















