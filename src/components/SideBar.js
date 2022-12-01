import React from 'react';
import image from '../assets/images/02-Logo-small.jpeg';
import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import NotFound from './NotFound';
import {Link, Route, Switch} from 'react-router-dom';
import SearchMovies from './SearchMovies';
import Chart from './Chart';

function SideBar(){
    return(
        <React.Fragment>
            
            <ul className="navbar-nav bg-gradient-blue sidebar sidebar-ligh accordion" id="accordionSidebar">

                
                <a className="sidebar-brand d-flex align-items-center justify-content-center" href="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Entrelineas"/>
                    </div>
                </a>

                
                <hr className="sidebar-divider my-0"/>

                
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Entrelineas</span></Link>
                </li>

                
                <hr className="sidebar-divider"/>

                
                <div className="sidebar-heading">Acciones</div>

                <li className="nav-item">
                <Link className="nav-link" to="/SearchMovies">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Buscar Producto</span>
                    </Link>
                </li>

               
                <li className="nav-item">
                <Link className="nav-link" to="/GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Generos Literarios</span>
                    </Link>
                </li>

                
                <li className="nav-item">
                    <Link className="nav-link" to="/LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último producto </span></Link>
                </li>

                
                <li className="nav-item nav-link">
                <Link className="nav-link" to="/Chart">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla de productos</span></Link>
                </li>

                
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            
            <Switch>
                <Route exact path="/">
                    <ContentWrapper />
                </Route>
                <Route path="/SearchMovies">
                    <SearchMovies />
                </Route>
                <Route path="/GenresInDb">
                    <GenresInDb />
                </Route>
                <Route path="/LastMovieInDb">
                    <LastMovieInDb />
                </Route>
                <Route path="/Chart">
                    <Chart />
                </Route>
                <Route component={NotFound} />
            </Switch>
            
        </React.Fragment>
    )
}
export default SideBar;