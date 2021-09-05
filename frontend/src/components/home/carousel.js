import { useState, useEffect } from 'react';
import axios from 'axios';
import './home.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';


export default function CarouselSlider() {
  const [list, setList] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/category/')
    .then(({data}) => setList(data))
    .catch(err => console.log(err));
  }, []);


  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 1
    }
  }

	return(
     <>
      <Carousel
       responsive={responsive}
      >
       {
        list.map(e => (
          <div className="mainSlider"  key={e.id} >
           <img src={`${e.picture}`} alt="" width="100%" height="100%" />
           <div className="mainInfo" >
            <h4 style={{color:'#CC9966'}} >{e.category}</h4>
            <h1 className="text-capitalize" >{e.desc}</h1>
            <Link to={`/category/${e.category}`} className="btn shadow-none" >
             Discover More
            </Link>
           </div>
          </div>
        ))
       }

      </Carousel>
      
     </>
	)
}