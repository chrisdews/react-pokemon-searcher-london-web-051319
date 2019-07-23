import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = () => {
    const newObj = 
    {
      "height": 10,
      "weight": 130,
      "name": this.state.name,
      "abilities": [
        "overgrow",
        "chlorophyll"
      ],
      "moves": [
        
      ],
      "stats": [
        {
          "value": 80,
          "name": "special-defense"
        },
        {
          "value": 80,
          "name": "special-attack"
        },
        {
          "value": 63,
          "name": "defense"
        },
        {
          "value": 62,
          "name": "attack"
        },
        {
          "value": 60,
          "name": "speed"
        },
        {
          "value": parseInt(this.state.hp),
          "name": "hp"
        }
      ],
      "types": [
        "grass",
        "poison"
      ],
      "sprites": {
        "front": this.state.frontUrl,
        "back": this.state.backUrl
      }
    }


    
    return fetch('http://localhost:3000/pokemon', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(newObj), // body data type must match "Content-Type" header
    })
    .then(response => response.json())
    .then(() => {this.props.addNewPoke(newObj)})
    

  }

  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }

  render() {
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.onChange}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.onChange}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.onChange}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.onChange}/>
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
