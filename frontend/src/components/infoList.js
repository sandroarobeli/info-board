import React from 'react'
import axios from 'axios'
import Info from './info'


export default class InfoList extends React.Component {
    constructor(props) {
        super(props)
        this.state ={
            infos: []
        }
        this.deleteInfo = this.deleteInfo.bind(this)
    }

    componentDidMount() {
        // Send GET request to the given endpoint to 
        // Populate table with existing infos by users
        axios.get('http://127.0.0.1:8080/infos')
            .then(response => {
                this.setState(() => ({
                    infos: response.data
                }))
            })
            .catch(error => console.log(error))
    }

    deleteInfo(id) {
        // Send DELETE request to the given endpoint to
        // Delete a given info 
        axios.delete('http://127.0.0.1:8080/infos/delete/' + id)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
        // Removes that Info by updating the state
        this.setState((state) => ({
            infos: state.infos.filter(info => info._id !== id)
        }))    
    }

    infoList() {
        return this.state.infos.map(currentInfo => <Info info={currentInfo} deleteInfo={this.deleteInfo} key={currentInfo._id}/>)
    }
// table-hover?
    render() {
        return (
            <div>
                <h3>Info Board</h3>
                <table className='table'>
                    <thead className='thead-light'>
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.infoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}