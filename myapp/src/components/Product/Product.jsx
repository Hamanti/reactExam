import { NavLink } from "react-router-dom"
import "./Product.css"

export default function Product({ id, title, price, img }) {
    return (
        <>

            <NavLink to={"/catalog/" + id}>
                <div className="product">
                    <img src={img} alt="" className="product-img" />
                    <div className="product-title">{title}</div>
                    <div className="product-price">{price} $</div>
                </div>
            </NavLink>

        </>
    )
}