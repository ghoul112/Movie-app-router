import React from 'react'
import { useParams } from 'react-router-dom'

function Descpage({movies}) {
    const params=useParams();

  
    const movie=movies.filter((el)=>el.name==params.name)[0];
    console.log(movie);
  return (
    <div>
{movie.name}
{movie.trailer}


    </div>
  )
}

export default Descpage