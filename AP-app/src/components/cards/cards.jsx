import React from 'react'
import Card from './card'

import image1 from '../img/image1.jpg'
import image2 from '../img/image2.jpg'
import image3 from '../img/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Steve Jobs',
        image: image1,
    },
    {
        id: 2,
        title: 'Habitos de superacion',
        image: image2,
    },
    {
        id: 3,
        title: 'Inquebrantables',
        image: image3
    }
]

function Cards() {
    return (
        <div className="container d-flex  align-items-center pt-5">
            <div className="row">
                {cards.map(({ title, image, id }) => (
                    <div className="col-md-4" key={id}>
                        <Card imageSource={image} title={title} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cards     