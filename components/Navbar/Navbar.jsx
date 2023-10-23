import React from 'react'
import { Link } from 'react-router-dom'
import "../elements/Chat.css"

export default function Navbar() {
  return (
    <div>
        <div>
            <ol className="NavBar">
                <li className='li'><Link to={'/'}>Главная</Link></li>
                <li className='li'><Link to={'/Second'}>NBA</Link></li>
                <li className='li'><Link to={'/Thirt'}>Чат</Link></li>
            </ol>
        </div>
    </div>
  )
}
