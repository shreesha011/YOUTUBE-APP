import React from 'react'


// Passing the data(name) as props from ButtonList to Button file 
const Button = ({name}) => {
  return (

    <div>
   
    {name.map((item,index) =>(
    <button  key={index} className="px-5 py-2 m-2 bg-gray-300 rounded-lg">
        {item}
   
    </button>
   ))}
    </div>
  )
}

export default Button