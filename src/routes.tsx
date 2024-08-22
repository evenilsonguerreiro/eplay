import { Routes, Route } from 'react-router-dom'

import Home from './components/page/Home'
import Categories from './components/page/Categories'
import Product from './components/page/Product'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/categories" element={<Categories />} />
    <Route path="/product/:id" element={<Product />} />
  </Routes>
)

export default Rotas
