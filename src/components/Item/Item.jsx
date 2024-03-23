
import { Link } from 'react-router-dom';


const Item = ({id, name, price, category, img, stock, brand, description}) => {
    return (
      <article className="CardItem col-md-6 col-lg-4">
        <header className="Header">
            <h2 className="ItemHeader d-flex justify-content-evenly">
                {name}
            </h2>
            </header>
            <picture>
                <img src={img} alt={name} id='itemPicture' className="ItemImg rounded mx-auto d-block d-flex justify-content-evenly" />
            </picture>
            <section>
                <p className="ItemInfo d-flex justify-content-evenly">Precio: {price}</p>
            </section>
            <footer className="ItemFooter d-flex justify-content-evenly">
                <Link to={`/item/${id}`} className="option">Ver Detalle</Link>
            </footer>
        
      </article>
    ) }
 
export default Item;