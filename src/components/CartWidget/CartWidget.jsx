import cart from './assets/pngwing.com.png'
const CartWidget = () => {
    return (
        <div id='cartWidget'>
        <img className='d-inline' id='cartWidgetImg' src={cart} alt="cartWidget"/>
          <p className='d-inline' id='cartWidgetText'> 0 </p>  
        </div>
    )
}
export default CartWidget