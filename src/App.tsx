import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav-Bar/navbar';
import ItemContainer from './containers/item-containers';
import Cart from './containers/cart';
import DetailsContainer from './containers/details-container';
import ContextProvider from './context/context.jsx';
import IndexContainer from './containers/index-container.js';
import Footer from './components/Footer/footer.js';

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<IndexContainer />} />
            <Route path='/products/:category' element={<ItemContainer />} />
            <Route path='/product/:id' element={<DetailsContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/*' element={<Navigate to='/' replace={true} />} />
          </Routes>
          <Footer/>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
