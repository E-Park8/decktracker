import React from 'react'


const Card = props => {
    return (
        <div className="card" style = {{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{props.characters.name}</h5>
                    <p className="card-text">{props.characters.deck}</p>
                </div>
</div>
    )
}

export default Card