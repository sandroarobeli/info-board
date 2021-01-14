import React from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export default class EditInfo extends React.Component {
    constructor(props) {
        super(props)
        this.userInput = React.createRef();
        this.state ={
            username: '',
            description: '',
            date: new Date(),
            users: []
        }
    this.onChangeUsername = this.onChangeUsername.bind(this)
    this.onChangeDescription = this.onChangeDescription.bind(this)
    this.onChangeDate = this.onChangeDate.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        // Send GET request to set the username
        // From the Info we are editing
        axios.get('http://127.0.0.1:8080/infos/' + this.props.match.params.id)
            .then(response => {
                this.setState(() => ({
                    username: response.data.username,
                    description: response.data.description,
                    date: new Date(response.data.date)
                }))
            })
            .catch(error => console.log(error))

        // Send GET request to the given endpoint to 
        // Populate drop dow menu with existing users
        axios.get('http://127.0.0.1:8080/users')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState(() => ({
                        users: response.data.map(user => user.username)
                    }))
                }
            })
            .catch(error => console.log(error))
        }
    onChangeUsername(event) {
        this.setState(() => ({
            username: event.target.value            
        }))
    }
    onChangeDescription(event) {
        this.setState(() => ({
            description: event.target.value            
        }))
    }
    onChangeDate(date) {
        this.setState(() => ({
            date            
        }))
    }
    onSubmit(event) {
        event.preventDefault()
        const info = {
            username: this.state.username,
            description: this.state.description,
            date: this.state.date
        }
        console.log(info)// test

        // Send POST request to the given endpoint, which adds a user
        axios.patch('http://127.0.0.1:8080/infos/update/' + this.props.match.params.id, info)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        
        // Clear the input bar
        this.setState(() => ({
            username: '',
            description: ''
        }))
        window.location = '/' 
    }

    render() {
        return (
            <div>
                <h3>Edit Info Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className='form-group'>
                        <label>Username: </label>
                        <select
                        ref={this.userInput}
                        required
                        className='form-control'
                        value={this.state.username}
                        onChange={this.onChangeUsername}>
                            {
                            this.state.users.map(user => <option key={user} value={user}>{user}</option>)
                        }
                        </select>
                    </div>
                    <div className='form-group'>
                        <label>Description: </label>
                        <input 
                            type='text'
                            required
                            className='form-control'
                            value={this.state.description}
                            onChange={this.onChangeDescription}/>
                    </div>
                    <div className='form-group'>
                        <label>Date: </label>
                        <div>
                            <DatePicker 
                                selected={this.state.date}
                                onChange={this.onChangeDate}/>
                        </div>
                    </div>
                    <div className='form-group'>
                        <button type='submit' className='btn btn-primary'>Edit Info Log</button>
                    </div>
                </form>
            </div>
        )
    }
}