import Button from "../components/Button/Button";
import Product from "../components/Product/Product";
import { products } from "../data"
import { useParams } from "react-router-dom";

export default function ProductPage() {

    const {id} = useParams()
    
    const product = products.find(product => product.id === parseInt(id))


    return (
        <>
         <div className="product-container">
            <Product id={product.id} title={product.title} price={product.price} img={product.img}/>
            <Button>Buy</Button>
         </div>
        </>
    )
}