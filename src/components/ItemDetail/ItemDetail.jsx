import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, price, category, img, stock, brand, description}) => {
    return (
      <article className="CardItem col-md-4">
        <header className="Header">
            <h2 className="ItemHeader">
                {name}
            </h2>
            <h3 className="ItemCategory">
                {category}
            </h3>
            </header>
            <picture>
                <img src={img} alt={name} className="ItemImg" />
            </picture>
            <section>
                <p className="ItemInfo">Precio: ${price}</p>
                <p className="ItemInfo">Stock disponible: {stock}</p>
                <p className="ItemDescription">{description} </p>
                <p className="ItemDescription"> Marca: {brand}</p>
            </section>
            <footer className="ItemFooter">
            <ItemCount initial={0} stock={stock}/>
            </footer>
        
      </article>
    ) }
 
export default ItemDetail;