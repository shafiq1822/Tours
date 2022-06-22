import React from 'react'

const Tour = ({ id, image, info, name, price, deleteTour }) => {
    console.log(price)
    return (
        <article className='single_tour'>
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className='tour-price'>₹{price}</h4>
                </div>
                <p>{info}</p>
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