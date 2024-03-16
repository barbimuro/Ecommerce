import cart from './assets/pngwing.com.png'
const CartWidget = () => {
    return (
        <div id='cartWidget'>
        <img id='cartWidgetImg' src={cart} alt="cartWidget"/>
          <p id='cartWidgetText'> 0 </p>  
        </div>
    )
}
export default CartWidget