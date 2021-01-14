import React from 'react'
import axios from 'axios'

export default class CreateUser extends React.Component {
    constructor(props) {
        super(props)
        this.userInput = React.createRef();
        this.state ={
            username: '',
        }
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    }

    onChangeUsername(event) {
        this.setState(() => ({
            username: event.target.value            
        }))
    }
    onSubmit(event) {
        event.preventDefault()
        const user = {
            username: this.state.username,
        }
        
        // Send POST request to the given endpoint, which adds a user
        axios.post('http://127.0.0.1:8080/users/add', user)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        // Clear the input bar
        this.setState(() => ({
            username: ''
        }))
    }

    render() {
        return (
            <div>
                <h3>Create New user</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <input 
                            type='text'
                            className='form-control'
                            value={this.state.username}
                            onChange={this.onChangeUsername}/>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Create User</button>
                    </div>
                </form>
            </div>
        )
    }
}