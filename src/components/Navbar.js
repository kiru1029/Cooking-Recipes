import './Navbar.css'
import { Link } from 'react-router-dom'
import React from 'react'
import Searchbar from './Searchbar'

export default function () {
  return (
    <div className='navbar'>
        <nav>
            <Link to='/' className='brand'>
                <h1>Cooking Recipes</h1>
            </Link>
            <Searchbar />
            <Link to="/create">Create Recipe</Link>
        </nav>
    </div>
  )
}
