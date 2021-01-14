import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => (
    <div>
        <h2>404 Page not found</h2>
        <Link to='/'>back home</Link>
    </div>
)

export default NotFoundPage

