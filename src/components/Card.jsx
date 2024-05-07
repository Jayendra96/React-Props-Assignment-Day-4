import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
      <div className="image" style={{ backgroundColor: props.hex }}>
      </div>
      <div>
        <h1>{props.hex}</h1>
        <p style={{color: props.hex}}>{props.name}</p>
      </div>
    </div>   
  )
}

export default Card
