import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  
  state = {
    pokImage: this.props.pokemon.sprites.front
  }

  clickHandler = () => {
    this.state.pokImage === this.props.pokemon.sprites.front ? this.setState({ pokImage: this.props.pokemon.sprites.back}) : this.setState({ pokImage: this.props.pokemon.sprites.front})
  }
  

  render() {

    return (
      <Card>
        <div>
          <div className="image">
            <img alt="oh no!" src={this.state.pokImage} onClick={this.clickHandler} />
          </div>
          <div className="content">
            <div className="header">{this.props.pokemon.name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {this.props.pokemon.stats[5].value} hp
            
            </span>
          </div>
        </div>
      </Card>
      
    )
  }
}

export default PokemonCard
