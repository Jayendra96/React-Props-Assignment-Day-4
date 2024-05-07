import React from 'react'

const Card = (props) => {
  return (
    <div className="container">
    <div className='card'>
      <div className="image" style={{ backgroundColor: props.hex }}>
      </div>
      <div>
        <h1>{props.hex}</h1>
        <p>{props.name}</p>
      </div>
    </div>
    </div>
   
  )
}

export default Card
