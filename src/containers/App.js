import React, { Component } from 'react';
import 'tachyons';
import { CardList } from './../components/CardList';
import { SearchBox } from './../components/SearchBox';
import { Scroll } from './../components/Scroll';
import './App.css';

export class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => this.setState({ robots: users }));
  }
  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { robots, searchField } = this.state;
    const filteredRobots = robots.filter((robot) => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return !robots.length ? (
      <h1 className="tc f1">Loading</h1>
    ) : (
      <div className="tc">
        <h1 className="f1">Robo Friends</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}
