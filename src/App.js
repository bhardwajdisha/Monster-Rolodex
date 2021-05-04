import React , {Component} from 'react';
import {CardList} from './component/card-list/card-list';
import {SearchBox} from './component/search-box/search-box';
import './App.css';
class App extends Component{
  constructor(){
    super();

    this.state={
      monsters:[],
      searchField:"",
    }
  }

  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(res=>res.json())
      .then(users=>this.setState({monsters: users }));
  }
  handleSearch = e =>{
    this.setState({searchField:e.target.value})
  }
  render(){
    const {monsters,searchField}=this.state;
    const filterMonster = monsters.filter(monster=>{
       return monster.name.toLowerCase().includes(searchField.toLocaleLowerCase());
    })
    return(
      <div className="App">
        <h1>MONSTER ROLODEX</h1>
        <SearchBox 
            handleSearch={this.handleSearch}
            placeholder='Search Monster'
        />
         <CardList monsters={filterMonster} />
      </div>
    )

  }
}

export default App;
