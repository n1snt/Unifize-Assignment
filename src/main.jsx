import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/index.css'
import Root from './pages/Root.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import VanillaTablePage from './pages/VanillaTablePage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/vanilla_table_page" element={<VanillaTablePage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
