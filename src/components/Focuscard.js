import React from 'react'

function Focuscard() {
    // const data = 
    //     props [{
    //     "image": './Group503.png',
    //     "heading":'Idea Generation'
    // }]


    
  return (
    <div className='focus-card'>
        <div className='d-flex justify-content-center'>
            <img className='img-card' src='./Group503.png' alt='bulb'/>
            </div>
            <h3 className='h3-focus text-center'> idea generation</h3>
            <p className='foucs-p text-center'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet </p>
       
    </div>
  )
}

export default Focuscard