import React from 'react';

const style = {
  marginLeft: '15px'
}

const City = (props) => {
  return (
    <div>
      <span style={style}>{props.id}</span>
      <span style={style}>{props.name}</span>
      <span style={style}>{props.population}</span>
    </div>
  )
}

export default City;