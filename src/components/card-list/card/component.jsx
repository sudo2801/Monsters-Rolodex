import { Component } from 'react';

import "./card.style.css"

class Card extends Component {
    render() {
        const { id, name, email } = this.props.monster
       // console.log(this.props.monster[0].name)
        //console.log(name,email)
        return (
            <div className="card-container" key={id}>
                <img src={`https://robohash.org/${id}?set=set2&size=180x180`}
                    alt="{}" />
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        )

    }
}

export default Card;