import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Root from './pages/Root.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import VanillaTablePage from './pages/VanillaTablePage.jsx'
import StyledTablePage from './pages/StyledTablePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/vanilla_table_page" element={<VanillaTablePage />} />
        <Route path="/styled_table_page" element={< StyledTablePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
