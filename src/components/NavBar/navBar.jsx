import { NavLink, Outlet, Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav id='navBar'>
            <Link to='/'>
                <h2>Mi tienda de maquillaje</h2>
            </Link>
      <div className='categories'>
        <NavLink to={`/category/PreMakeUp`} className='Option'>
          Pre-MakeUp
        </NavLink>
        <NavLink to={`/category/BasesYCorrectores`} className='Option'>
          Bases y correctores
        </NavLink>
        <NavLink to={`/category/Sombras`} className='Option'>
          Sombras
        </NavLink>
      </div>
      <CartWidget />
      <Outlet /> {/* Este Outlet es importante */}
    </nav>
  );
};

export default NavBar;