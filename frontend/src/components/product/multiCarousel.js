import { useState, useEffect } from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from '../card/card';
import axios from 'axios';

export default function MultiCarousel() {
    const [list, setList] = useState([]);

    const responsive = {
     desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
     },
     tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
     },
     mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
     }
    };

	useEffect(() => {
		axios.get('http://localhost:8000/product/')
		.then(({data}) => setList(data))
		.catch(err => console.log(err));
	}, []);

	return(
     <>
      <h3 className="text-center" >You Might Also Like</h3>
      <Carousel
       className="col-md-8 offset-md-2" 
       responsive={responsive}
      >
       {
       	list.map(e => (
          <Card product={e} key={e.id} />
       	))
       }

      </Carousel>
     </>
	)
}