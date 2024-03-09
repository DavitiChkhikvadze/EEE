import React from 'react'

function Button(props) {
  return (
    <button className='capitalize transition-all bg-gray-300 px-[2rem] hover:opacity-[.5] w-[300px] text-[1rem] py-[.5rem] rounded '>
        {props.value}
    </button>
    )
}

export default Button