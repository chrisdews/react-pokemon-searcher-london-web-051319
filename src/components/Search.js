import React, { Component } from 'react';

class Search extends Component {


    render() {
        return (
            <div>
                <button onClick={this.props.handleFilterClick}>
                    click me!
                </button>

                <form>
                    <label> Search </label>
                    <input type="text" name="name" value={this.props.search} onChange={this.props.handleChange}/>
                </form>
            </div>
        );
    }
}

export default Search;
