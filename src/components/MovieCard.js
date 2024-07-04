import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from "react-rating-stars-component";
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

function MovieCard({movie}) {
  const navigate = useNavigate();
  return (
    <div>
      <Link to={`/trailer/${movie.name}`}  style={{textDecoration:"none", color:"white"}}>
            <Card style={{ width: '18rem' ,margin:"10px" } }>
      <Card.Img variant="top" src={movie.posterurl} />
      <Card.Body>
        <Card.Title>{movie.name}</Card.Title>
        <Card.Text>
            <p>{movie.description}</p>
        </Card.Text>
        
        
        <ReactStars
        count={5}
        size={24}
        activeColor="#ffd700"
        value={movie.rating}
    />,
        <Button variant="primary" onClick={() => navigate('/')}>Trailer</Button>
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default MovieCard