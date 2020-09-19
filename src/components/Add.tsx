import React from 'react'

const Add = (props: {first:number; second:number}) => {
  return (
    <div>
      This number was added together: <strong>{props.first + props.second}</strong>
    </div>
  )
}

export default Add