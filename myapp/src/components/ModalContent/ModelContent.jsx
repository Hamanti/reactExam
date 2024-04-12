import "./ModelContent.css"
import { products } from "../../data"
import Product from "../Product/Product"

export default function ModelContent({ closeModal }) {
    return (
        <>
            <div className="modal">
                <div className="modal-head">
                    <div className="modal-head-left">
                        <h1>Cart</h1>
                        <h2>This is cart modal</h2>
                    </div>
                    <button onClick={closeModal}>Close</button>
                </div>
                <div className="modal-container">
                    <Product {...products[0]} />
                    <Product {...products[1]} />
                </div>
            </div>
        </>
    )
}