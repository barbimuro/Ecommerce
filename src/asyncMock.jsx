 const products=[
    {
        id: '1' ,
        name: 'Base Lancome',
        price: '60',
        category: 'BasesYCorrectores',
        img: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/201903/12/00113516462911____2__967x1200.jpg',
        stock: 12,
        brand: 'Lancome',
        description: 'Base marca lancome para todo tipo de tonos de piel'
    },
    {
        id: '2' ,
        name: 'Eau de rose',
        price: '20',
        category: 'PreMakeUp',
        img: 'https://sdcdn.io/mac/es/mac_sku_MWR201_1x1_0.png?width=1440&height=1440',
        stock: 23,
        brand: 'Mac',
        description: 'Spray de agua de rosas para preparar tu piel para el maquillaje'
    },
    {
        id: '3' ,
        name: 'Beauty Desert Dusk',
        price: '80',
        category: 'Sombras',
        img: 'https://cdn.notinoimg.com/detail_main_lq/huda_beauty/6291106031454_01-o/huda-beauty-desert-dusk-paleta-de-sombras-de-ojos_.jpg',
        stock: 3,
        brand: 'Huda Beauty',
        description: 'Sombra para tus ojos'
    }
 ]
export default products 

 export const getProducts = () => {
    return new Promise((resolve)=>{
        setTimeout(()=> {
            resolve(products)
        }, 300)
    })
 }

 export const getProductsById = (productsId) => {
    return new Promise((resolve)=>
    setTimeout(()=>{
    resolve(products.find(prod=> prod.id === productsId))
    }, 500
    ))
 }
 export const getProductsByCategory = (productsCategory) => {
    return new Promise((resolve)=>
    setTimeout(()=>{
    resolve(products.filter(prod=> prod.category === productsCategory))
    }, 500
    ))
 }