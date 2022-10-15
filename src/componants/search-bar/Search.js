import React, { Component } from "react";
import '../search-bar/Search.css'

export default class Search extends Component {
  render() {

    const {onChange} =  this.props;
    return (
      <div>
        <input
          className="search-box"
          type="search"
          placeholder="search"
          onChange={onChange}
        />
      </div>
    );
  }
}
