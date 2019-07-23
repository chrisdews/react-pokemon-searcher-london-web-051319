import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import _ from 'lodash'
const allPokemonUrl = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {

  state = {
    pokemon: [],
    search: ''
  }

  componentDidMount(){
    fetch(allPokemonUrl).then(response => response.json()).then(pokemon => this.setState({pokemon}))
  }

  handleChange = (e) => {
    e.preventDefault()
    this.setState({search: e.target.value})
    const allPokemon = this.state.pokemon
    const filteredPokemon = allPokemon.filter(pokemon => pokemon.name.includes(this.state.search))
    this.setState({pokemon: filteredPokemon})
  }

  addNewPoke = (newObj) => {
    
    this.setState({
      pokemon: [...this.state.pokemon, newObj]
     })
  }

  handleFilterClick = () => {
    const filteredPokemon = this.state.pokemon.filter(pokemon => (pokemon.stats[5].value > 80))
    const allPokemon = this.state.pokemon
    this.state.pokemon.length > 10 ? console.log('true') : console.log('false')
    //     this.setState({
    //   pokemon: allPokemon
    //  })} else {this.setState({
    //   pokemon: filteredPokemon
    //  })}

  }




  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search search={this.state.search} handleChange={this.handleChange} handleFilterClick={this.handleFilterClick}/>
        <br />
        <PokemonCollection allPokemon={this.state.pokemon}/>
        <br />
        <PokemonForm addNewPoke={this.addNewPoke}/>
      </div>
    )
  }
}

export default PokemonPage
