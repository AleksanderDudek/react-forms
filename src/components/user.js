import React, { Component } from 'react';

import FormFields from './Widgets/Forms/formFields';

class User extends Component {

    state = {
        formData: {
            name:{
                element:'input',
                value: '',
                label:true,
                labelText:'Name',
                config:{
                    name: 'name_input',
                    text: 'text',
                    placeholder:'Enter your name...'
                },
                validation:{
                    required: true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            lastname:{
                element:'input',
                value: '',
                label:true,
                labelText:'Lastname',
                config:{
                    name: 'lastname_input',
                    type: 'text',
                    placeholder:'Enter your lastname...'
                },
                validation:{
                    required: false
                },
                valid:true,
                touched:false,
                validationMessage:''
            },
            message:{
                element:'textarea',
                value: '',
                label:true,
                labelText:'Message',
                config:{
                    name: 'message_input',
                    rows: 4,
                    cols: 36
                        },
                validation:{
                    required: true
                },
                valid:false,
                touched:false,
                validationMessage:''
            },
            age:{
                element:'select',
                value: '',
                label:true,
                labelText:'Age',
                config:{
                    name: 'age_input',
                    options:[
                        {val:'1', text:'10-19'},
                        {val:'2', text:'20-29'},
                        {val:'3', text:'30-39'},
                        {val:'4', text:'40-50'}

                    ]
                        },
                validation:{
                    required: true
                },
                valid:false,
                touched:false,
                validationMessage:''
            }
        }
    }


    updateForm = (newState) => {
        console.log(newState);

        this.setState({
            formData: newState
        });
    }

    submitForm = (event) => {
        event.preventDefault();

        let dataToSubmit = {};

        for(let key in this.state.formData){
            dataToSubmit[key] = this.state.formData[key].value;
        }

        console.log(dataToSubmit);

    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.submitForm}>

                    <FormFields 
                        formData={this.state.formData}
                        change={(newState) => this.updateForm(newState)}
                    />

                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        )
    }
}

export default User;