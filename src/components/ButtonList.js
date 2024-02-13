import React from 'react'
import Button from './Button'


const list=["All","Gaming","Songs","Live","Soccer","Cricket","cooking","Valentines","News","Course","Football","Volleyball"];

// Passing the data from Parent file(ButtonList)
const ButtonList = () => {
  return (
    <div className="flex">
      <Button name={list}/>

      </div>
  )
}

export default ButtonList