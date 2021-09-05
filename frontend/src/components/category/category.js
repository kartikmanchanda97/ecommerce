import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../card/card';
import Header from '../header/header';

export default function Category() {
    const [list, setList] = useState([])

    const { category } = useParams();

    useEffect(() => {
      axios.get('http://localhost:8000/product/')
      .then(({data}) => setList(data))
      .catch(err => console.log(err));
    }, []);

	return(
     <>
      <Header heading={category} />
      <div className="container col-md-10 mt-4 mb-4 cartContainer" >

      {
      	list
      	.filter(e => e.category === category)
      	.map(e => (
          <Card product={e} key={e.id} />
      	))
      }
      </div>
     </>
	)
}