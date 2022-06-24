import React, { useState } from 'react'
import Tour from './Tour'

const Tours = ({ tours, deleteTour }) => {

    return (
        <section>
            <div className="title">
                <h2>Our Tours</h2>
            </div>
            <div className='tours_container'>{tours.map((tour) => {
                return <Tour key={tour.id} {...tour} deleteTour={deleteTour} />
            })}</div>
        </section>
    )
}

export default Tours;