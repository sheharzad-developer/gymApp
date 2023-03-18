import React from 'react'

function Trainerbox(props) {
  return (
    <div className="t-box">
        <div className="t-img">
            <img src={props.image} alt="img" style={{maxWidth: '100%'}} />
        </div>
        <div className="a-b-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
            </div>
    </div>
  )
}

export default Trainerbox
