import React from 'react'

const Number = (props: {randNum: number}) => {
  return <>
     <p>This number is generated randomly: <strong>{props.randNum}</strong> </p>
    </>
  
}

export default Number