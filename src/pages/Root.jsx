import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import { useNavigate } from 'react-router'

function Root() {

  const navigate = useNavigate();

  return (
    <div className='parent'>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => navigate("/vanilla_table_page")}>
          View Vanilla Table
        </button>
      </div>
    </div>
  )
}

export default Root;
