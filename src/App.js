import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavigationMenu from './components/NavigationMenu';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CompanyPage from './pages/CompanyPage';
import ProductsPage from './pages/ProductsPage';
import GalleryPage from './pages/GalleryPage';
import NewsPage from './pages/NewsPage';
import VideosPage from './pages/VideosPage';
import ContactPage from './pages/ContactPage';
import logo from './images/logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <NavigationMenu />
          </div>

          <Route exact path="/" component={HomePage} />
          <Route exact path="/empresa" component={CompanyPage} />
          <Route exact path="/productos" component={ProductsPage} />
          <Route exact path="/galeria-de-productos" component={GalleryPage} />
          <Route exact path="/novedades" component={NewsPage} />
          <Route exact path="/videos" component={VideosPage} />
          <Route exact path="/contacto" component={ContactPage} />

          <Footer className="App-footer" />
        </div>
      </Router>
    );
  }
}

export default App
