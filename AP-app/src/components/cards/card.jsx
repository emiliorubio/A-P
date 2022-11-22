import React from 'react'
import '../cards/cards.css'


function Card({title, imageSource}) {
    return (
        <div className='card'>
            <img className='images' src={imageSource} alt="" />
            <div className='card-body'>
                <h4 className='card-title'>{title}</h4>
                <p className='card-text text-secondary'> Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    In saepe odio sint ab quaerat eligendi aut, ullam nesciunt id velit tempora.
                    Distinctio nam impedit ducimus nobis voluptatem facere, eveniet hic!</p>
                <a href="#!" className='btn btn-outline-secondary rounded-0'>
                    Ir a la tienda
                </a>
            </div>

        </div>
    )
}

export default Card
