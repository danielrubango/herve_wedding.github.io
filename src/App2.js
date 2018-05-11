import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import { robots } from './robots';
import { weddingData } from './weddingData';

class App extends Component {
    constructor() {
        super();

        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchBoxChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchBoxChange}/>
                <CardList robots={ filteredRobots }/>
            </div>
        )
    }
}

export default App;
