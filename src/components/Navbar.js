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
                <a href="/posts">Posts</a>
            </li>
            <li>
                <a href="/login">Login</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar