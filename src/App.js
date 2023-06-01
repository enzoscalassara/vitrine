import React from 'react';
// react router dom
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
// paginas
import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails'
// componentes
import Header from './components/Header'
import Footer from './components/Footer'

// gastei 2 horas tentando descobrir oq tava dando errado
// escrevi /product/ ao inves de /products/ no path :)
const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products/:id' element={<ProductDetails />} />
      </Routes>

      <Footer />
    </Router>
    </div>;
};

export default App;
