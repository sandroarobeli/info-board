import React from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends React.Component {
    
    render() {
        return (
            <nav className='navbar navbar-dark bg-primary navbar-expand-lg'>
                <Link to='/' className='navbar-brand'>InfoBoard</Link>
                <div className='collapse navbar-collapse container-fluid'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='navbar-item'>
                        <Link to='/' className='nav-link'>Infos</Link>
                        </li>
                        <li className='navbar-item'>
                        <Link to='/create' className='nav-link'>Create Info</Link>
                        </li>
                        <li className='navbar-item'>
                        <Link to='/user' className='nav-link'>Create User</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/translate' className='nav-link'>Translator</Link>
                        </li>
                    </ul>
                </div>
            </nav>

        )
    }
}