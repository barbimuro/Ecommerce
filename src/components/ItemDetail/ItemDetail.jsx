import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({id, name, price, category, img, stock, brand, description}) => {
const [quantityAdded, setQuantityAdded] = useState(0);
const { addItem } =useContext(CartContext)
const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity)
    

    const item = {
        id, name, price
        }
    addItem(item, quantity)
}

    return (
      <article className="CardItem col-md-4">
        <header className="Header">
            <h2 className="ItemHeader d-flex justify-content-center">
                {name}
            </h2>
            <h3 className="ItemCategory d-flex justify-content-center">
                {category}
            </h3>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="ItemInfo d-flex justify-content-center">Precio: ${price}</p>
                <p className="ItemInfo d-flex justify-content-center">Stock disponible: {stock}</p>
                <p className="ItemDescription d-flex justify-content-center">{description} </p>
                <p className="ItemDescription d-flex justify-content-center"> Marca: {brand}</p>
            </section>
            <footer className="ItemFooter d-flex justify-content-center">
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className="Option"> Terminar compra </Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
            </footer>
        
      </article>
    ) }
 
export default ItemDetail;
