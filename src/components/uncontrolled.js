import React, { Component } from 'react';

class Uncontrolled extends Component {

    handleSubmitClick = (event) => {
        event.preventDefault();

        const value = {
            name: this.name.value,
            lastname: this.lastname.value
        }

        console.log(value)
    }

    render(){
        return(
            <div className="container">
                <form>
                    <div className="form_element">
                        <label>Enter name</label>
                        <input
                            type="text"
                            placeholder="name..."
                            ref={input => this.name = input}
                        />
                    </div>
                    <div className="form_element">
                        <label>Enter last name</label>
                        <input
                            type="text"
                            placeholder="last name..."
                            ref={input => this.lastname = input}
                        />
                    </div>

                    {/* is button assuming submit control by default in form??? */}
                    <button
                        onClick={this.handleSubmitClick}
                    >
                        Sign in
                    </button>
                </form>
            </div>
        )
    }
}

export default Uncontrolled;