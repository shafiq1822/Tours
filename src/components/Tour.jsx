import React, { useState } from 'react'

const Tour = ({ id, image, info, name, price, deleteTour }) => {
    const [readMore, setReadMore] = useState(false);
    return (
        <article className='single_tour'>
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className='tour-price'>₹{price}</h4>
                </div>
                <p>{readMore ? info : `${info.substring(0, 200)}...`}     <button className='read_more' onClick={() => setReadMore(!readMore)}>{readMore ? 'Show less' : 'Read more'}</button></p>
                
                <div className="btn">
                <button className='btn_delete' onClick = {() => deleteTour(id)}>
                    Not Interested
                </button>
                </div>
            </footer>
        </article>
    )
}

export default Tour