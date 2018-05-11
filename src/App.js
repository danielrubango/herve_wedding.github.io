import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { weddingData } from './weddingData';

class App extends Component {
    constructor() {
        super();

        this.state = {
            datas: weddingData,
            searchfield: ''
        }
    }

    onSearchBoxChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render() {
        const filteredDatas = this.state.datas.filter(data => {
            return data.nom.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })

        return (
            <div>
                <h1>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchBoxChange}/>
                <CardList datas={ filteredDatas }/>
            </div>
        )
    }
}

export default App;
