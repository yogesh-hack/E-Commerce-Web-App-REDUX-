import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/cartSlice';
import { fetchedProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';


const Products = () => {
    const dispatch = useDispatch();
    const {data : products,status} = useSelector((state) => state.product)
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchedProducts())
        //* const fetchedProducts = async () => {
        //*     const res = await fetch*('https://fakestoreapi.com/products')
        //*     const data = await res.json()
        //*     setProducts(data)
        //*     console.log(data)
        //* }
        //* fetchedProducts();
    }, [])

    const handelAdd = (product) => {
        // console.log('add')
        dispatch(addToCart(product));
    }

    if(status === STATUSES.LOADING){
        return <h2 className='loading'>Loading....</h2>
    }
    if(status === STATUSES.ERROR){
        return <h2 className='loading'>Something went Wrong....</h2>
    }
    return (
        <>
            <h1 className="">Products</h1>
            <div className="maincard">
            {
                products.map(product => (
                        <div className="card" key={product.id}>
                            <img src={product.image} alt="product" />
                            <h4 className=''>{product.title}</h4>
                            <h5 className=''>₹ {product.price}</h5>
                            {/* <p className=''>{product.description}</p> */}
                            <button onClick={() => handelAdd(product)} className="btn">Add to Cart</button>
                        </div>
                ))
            }
            </div>
        </>
    )
}

export default Products