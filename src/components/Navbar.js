import React from 'react'

const Navbar = () => {
  return (
    <nav className='nav'>
        <a href="/">The Fold</a>
        <ul>
            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/users/register">Register</a>
            </li>
            <li>
                <a href="/users/login">Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar