import { useState, useEffect } from 'react';
import './home.css'
import Card from '../card/card';
import CarouselSlider from './carousel';
import axios from 'axios';

export default function Home() {
    const [list, setList] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:8000/product/')
      .then(({data}) => setList(data))
      .catch(err => console.log(err));
    }, []);

	return(
     <>
      <CarouselSlider />
      <div className="container col-md-10 mt-4 mb-4 cartContainer" >
       {
         list.map((e) => (
          <Card product={e} key={e.id} />
         ))
       }
      </div>
     </>
	)
}