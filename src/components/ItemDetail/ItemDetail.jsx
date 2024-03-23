import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({id, name, price, category, img, stock, brand, description}) => {
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
            <ItemCount initial={0} stock={stock}/>
            </footer>
        
      </article>
    ) }
 
export default ItemDetail;