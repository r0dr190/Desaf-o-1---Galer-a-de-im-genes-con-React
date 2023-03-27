import React from 'react'

/* export const Card = ({direccionImg , titulo='título' , descripcion='descripcción'}) => { */
export const Card = ({direccionImg , titulo , descripcion}) => {

    return (

        <div className='card'>
            <img alt='card' src={direccionImg}/>
            {/* <img alt='src'>{direccionImg}</img> */}
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
        </div>
    )
};

export default Card;