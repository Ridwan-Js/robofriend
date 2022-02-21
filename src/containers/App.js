import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorrBoundary from "../components/ErrorrBoundary";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        this.setState({
          robots: user,
        });
      });
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  render() {
    const { robots, searchField } = this.state;
    const filterArray = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return !robots.length ? (
      <h1 className="tc">Robots Loading</h1>
    ) : (
      <div className="tc">
        <h1>RoboFriends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorrBoundary>
            <CardList robots={filterArray} />
          </ErrorrBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
