import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'


const Info = (props) => (
    <tr>
    {/* avatar goes here  */}
        <td>{props.info.username}</td>
        <td>{props.info.description}</td>
        <td>{moment(props.info.date).format("MMM DD YYYY")}</td>
        <td><Link to={'/edit/' + props.info._id}>edit</Link> | <a href='#' style={{color:'red'}} onClick={() => {props.deleteInfo(props.info._id)}}>delete</a></td>
    </tr>
)

export default Info

