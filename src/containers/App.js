import React, { Component } from 'react';
import CardList from '../components/CardList';
import './App.css';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'


class App extends Component {
    constructor(){
        super();
        this.state ={
            robots: [],
            searchField: ''
        }
    }

    componentDidMount (){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({robots: users}));
    }

    onSearchChange = (event) => {
        this.setState( {searchField: event.target.value} )
    };

    render(robots=this.state.robots) {
        let searchTarget = this.state.robots.filter(robots =>{
            return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        });
        return(
            <div className='header-div'>
                <h1>Robo Friends</h1>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={searchTarget}/>
                    </Scroll>
            </div>
        )
    };
};

export default App;