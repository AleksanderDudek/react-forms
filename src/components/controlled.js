import React, { Component } from 'react';

class Controlled extends Component {

    state = {
        name: '',
        lastname: ''
    }

    handleLastNameChange = (event) => {
        console.log(event.target.value)
        this.setState({
            lastname:event.target.value
        })
    }

    handleNameChange = (event) => {
        console.log(event.target.value)
        this.setState({
            name:event.target.value
        })
    }

    onSaveHandler = (event) => {
        event.preventDefault();

        console.log(this.state)
    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.onSaveHandler}>
                    <div className="form_element">
                        <label>Enter name</label>
                        <input
                            type="text"
                            onChange={this.handleNameChange}
                            value={this.state.name}
                            placeholder="name..."
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter last name</label>
                        <input
                            type="text"
                            onChange={this.handleLastNameChange}
                            value={this.state.lastname}
                            placeholder="last name..."

                        />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default Controlled;