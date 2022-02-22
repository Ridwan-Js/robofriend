import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorrBoundary from "../components/ErrorrBoundary";
import QueryRobot from "../components/QueryRobot";

class App extends Component {
  constructor() {
    super();
    this.state = {
      queryRobot: [],
      robots: [],
      searchField: "",
      searchRobot: 10,
      getRobot: null,
    };
  }
  componentDidMount() {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${this.state.searchRobot}&offset=0`
    )
      .then((response) => {
        return response.json();
      })
      .then((pokenmon) => {
        console.log(pokenmon);
        this.setState({
          robots: pokenmon.results,
        });
      });
  }

  onSearchChange = (event) => {
    this.setState({
      searchField: event.target.value,
    });
  };
  onSearchChangeInput = (event) => {
    this.setState({
      searchRobot: event.target.value,
    });
  };
  queryRobotFunc = () => {
    fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=${this.state.searchRobot}&offset=0`
    )
      .then((response) => {
        console.log(response);
        return response.json();
      })
      .then((pokenmon) => {
        console.log(pokenmon);
        this.setState({
          robots: pokenmon.results,
        });
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
        <input
          className="pa3 ba b--green bg-lightest-blue"
          type="search"
          placeholder="How Many Robot"
          onChange={(e) => this.setState({ searchRobot: e.target.value })}
        />
        <button
          onClick={this.queryRobotFunc}
          className="ma3 pa3 b--green bg-lightest-blue "
        >
          Go
        </button>
        {/* <QueryRobot
          searchRobot={this.onSearchChangeInput}
          getRobot={this.queryRobotFunc}
        ></QueryRobot> */}
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
