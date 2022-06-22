import React from 'react'

const Tour = ({ id, image, info, name, price }) => {
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
                <button className='btn_delete'>
                    Not Interested
                </button>
            </footer>
        </article>
    )
}

export default Tour