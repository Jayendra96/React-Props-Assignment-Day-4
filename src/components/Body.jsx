import React from 'react'
import data from './data.json'
import Card from './Card'

const Body = () => {
  return (
    <div className='container'>
      {
        data.map((elem, index) => (
          <Card key={index} hex={elem.hex} name={elem.name} />
        ))
      }
    </div>
  )
}

export default Body
