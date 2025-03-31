import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import RootPage from './pages/RootPage.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import VanillaTablePage from './pages/VanillaTablePage.jsx'
import StyledTablePage from './pages/StyledTablePage.jsx'
import StyledStateTablePage from './pages/StyledStateTablePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootPage />} />
        <Route path="/vanilla_table_page" element={<VanillaTablePage />} />
        <Route path="/styled_table_page" element={< StyledTablePage />} />
        <Route path="/state_styled_table_page" element={< StyledStateTablePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
