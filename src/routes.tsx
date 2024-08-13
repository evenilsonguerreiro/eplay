import { Routes, Route } from 'react-router-dom'

import Home from './components/page/Home'
import Categories from './components/page/Categories'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
  </Routes>
)

export default Rotas
