import React, { Component } from "react";
import '../card-list/card-list.css'


class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className="card-list">
        {monsters.map((monster) => (
          <div className="card-container">
            <img
              src={`https://robohash.org/${monster.id}?set=set4&size=180x180`}
              alt={`monster${monster.name}`}
            />
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
