import { Component } from "react";

import "./App.css";

import Search from "./componants/search-bar/Search";
import CardList from "./componants/card-list/card-list.componant";
import Header from "./componants/Header/Header";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          
        )
      );
  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    // destructuring
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        
        <Header/>
        <Search onChange={onSearchChange}/>
        <CardList monsters={filteredMonsters} />
        
    
      </div>
    );
  }
}

export default App;

// 34 done
