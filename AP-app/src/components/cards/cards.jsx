import React from 'react'
import Card from './Card'



function Cards({itemList}) {
    return (
        <div className="container d-flex  align-items-center pt-5">
            <div className="row">
                {itemList.map(({ title, image, id }) => (
                    <div className="col-md-4" key={id}>
                        <Card imageSource={image} title={title} />
                    </div>
                ))
                }
            </div>
        </div>
    );
}

export default Cards     