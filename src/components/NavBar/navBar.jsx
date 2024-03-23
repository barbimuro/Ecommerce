import { NavLink, Outlet, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className='row' id='navBar'>
            <Link to='/'>
                <h2 id='navBarTitle' className='text-center pt-3'>Mi tienda de maquillaje</h2>
            </Link>
            <div className='col-9'>
          <div className='categories row '>
                <NavLink id='navBarTitle' to={`/category/PreMakeUp`} className='Option col-3 d-flex justify-content-evenly'>
                  Pre-MakeUp
                </NavLink>
                <NavLink id='navBarTitle' to={`/category/BasesYCorrectores`} className='Option col-4 d-flex justify-content-evenly'>
                  Bases y correctores
                </NavLink>
                <NavLink id='navBarTitle' to={`/category/Sombras`} className='Option col-4 d-flex justify-content-evenly'>
                  Sombras
                </NavLink>
                </div>
        </div>
        <div className='col-3'>
              <CartWidget />
              <Outlet /> {/* Este Outlet es importante */}
        </div>
    </nav>
  );
};

export default NavBar;