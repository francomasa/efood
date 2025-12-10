import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurant from './pages/Resraurantes'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes/:id" element={<Restaurant />} />
    <Route path="/restaurantes/product/:id" element={<Restaurant />} />
  </Routes>
)

export default Rotas
