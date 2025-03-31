import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import '../styles/App.css'
import { useNavigate } from 'react-router'
import "../styles/styles.css"

function Root() {

  const navigate = useNavigate();

  return (
    <div className='parent' class="text-center">
      <h1 class="pb-3">Unifize Assignment</h1>
      <p class="pb-5">Read the pdf to know more about the implementations :)</p>
      <div className="card">
        <button onClick={() => navigate("/vanilla_table_page")}>
          View Vanilla Table
        </button>
      </div>
      <div className="card">
        <button onClick={() => navigate("/styled_table_page")}>
          View Styled Table
        </button>
      </div>
      <div className="card">
        <button onClick={() => navigate("/state_styled_table_page")}>
          View State Styled Table
        </button>
      </div>
    </div>
  )
}

export default Root;
