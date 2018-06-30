import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';




class App extends Component {
  constructor(){
    super()
    this.state={
      pokemon:[],
      level: [],
      myParty: [],
    }
  }
  
  componentDidMount(){
    axios.get('/api/get_all_pokemon').then(response => {
      this.setState({
        myParty: response.data
      })
    })
  }

  getRandomPokemon = () => {
    let num = Math.floor(Math.random() * 949) + 1;
    // console.log(`https://pokeapi.co/api/v2/pokemon/${num}`)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`).then(pokemonApiResponse => {
      console.log(pokemonApiResponse.data)
      this.getLevel();
      this.setState({
      pokemon: pokemonApiResponse.data.name
    })
      })
  }

  getLevel = () =>{
    axios.get('/api/pokemon_power_value').then(value => {
     let randomNumber = Math.floor(Math.random() * value.data.length);
      console.log();
      this.setState({
        level: value.data[randomNumber]
      })
      
    })
  }

  addToParty =  () =>{

    axios.post('/api/add_pokemon', {name: this.state.pokemon, level: this.state.level}).then(myParty =>{
      console.log(myParty);
      this.setState({
        myParty: myParty.data
      })
    })

    // this.setState({
    //   myParty: [...this.state.myParty,{
    //     name: this.state.pokemon,
    //     level: this.state.level}]
    // })
  }
  
  train = () =>{

  }
  // updatePrice(priceChange, id) {
  //   // axios (PUT)
  //   axios.put(`${baseUrl}/vehicles/${id}/${priceChange}`).then
  // (response => {
  //   this.setState({
  //     vehiclesToDisplay: response.data.vehicles
  //   });
  //   this.setState({
  //     vehiclesToDisplay: response.data.vehicles
  //   });

  delete = () => {

  }

  // sellCar(id) {
  //   // axios (DELETE)
  //   axios.delete(`${baseUrl}/vehicles/${id}`).then(response =>
  //   {
  //     this.setState({
  //       vehiclesToDisplay: response.data.vehicles
  //     });
  //   })
  //   // setState with response -> vehiclesToDisplay
  // }

  createBattleGroup = (myParty) =>{
    //.map 
    // return 6 highest value pokemon
  }



  render() {
    console.log(this.state.pokemon);
    let level = this.state.level
    console.log(this.state.myParty)
    const party = this.state.myParty.map((e,i) =>{
      return <div key={i}>
        <p>Name: {e.name} </p>
        <p>Value:{e.level}</p> 
        </div>
      
    })
    return (
     <div className="App">
     <div className="body">
        <div className="landing">
        landing
        </div>
        <div className="wild">
        wild
        {this.state.pokemon}, {this.state.level}
       <button onClick={()=> this.getRandomPokemon()}>get pokemon</button>
       <button onClick={()=> this.addToParty()}>add to party</button>
        </div>
        <div className="party">
        party
        {party}
        </div>
        <div className="battleGroup">
        battlegroup
        </div>
        <div className="footer">
        footer
        </div>
      </div>
      </div>
    );
  }
}


      // {this.state.pokemon}, {this.state.level}
      //  <button onClick={()=> this.getRandomPokemon()}>get pokemon</button>
      //  <button onClick={()=> this.addToParty()}>add to party</button>
      //  {party}
       /* <button onClick={()=> this.train()}>train</button> */
    

export default App;
