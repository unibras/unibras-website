import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const NavigationMenu = () => (
  <nav>
    <NavLink
        exact
        activeClassName="NavigationMenu__Link--active"
        className="NavigationMenu__Link"
        to="/">Home</NavLink>
    <NavLink
        activeClassName="NavigationMenu__Link--active"
        className="NavigationMenu__Link"
        to="/empresa">Empresa</NavLink>
    <NavLink
        activeClassName="NavigationMenu__Link--active"
        className="NavigationMenu__Link"
        to="/productos">Productos</NavLink>
    <NavLink
        activeClassName="NavigationMenu__Link--active"
        className="NavigationMenu__Link"
        to="/galeria-de-productos">Galería de productos</NavLink>
    <NavLink
        activeClassName="NavigationMenu__Link--active"
        className="NavigationMenu__Link"
        to="/novedades">Novedades</NavLink>
    <NavLink
        activeClassName="NavigationMenu__Link--active"
        className="NavigationMenu__Link"
        to="/videos">Videos</NavLink>
    <NavLink
        activeClassName="NavigationMenu__Link--active"
        className="NavigationMenu__Link"
        to="/contacto">Contacto</NavLink>
  </nav>
)

export default NavigationMenu;
