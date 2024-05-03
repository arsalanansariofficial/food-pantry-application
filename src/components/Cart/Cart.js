import "./Cart.css";
import Modal from "../UI/Modal/Modal";
import {useContext} from "react";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem/CartItem";

const Cart = (props) => {

    const cartContext = useContext(CartContext);
    const totalPrice = `$${cartContext.totalPrice.toFixed(2)}`;
    const hasItems = cartContext.items.length > 0;

    const addCartItemHandler = (item) => {
        cartContext.addItem({...item, quantity: 1});
    }

    const removeCartItemHandler = (id) => {
        cartContext.removeItem(id);
    }

    const cartItems =
        <ul className="cart-items">
            {
                cartContext.items.map(item => (
                    <CartItem key={item.id} id={item.id} name={item.name}
                        quantity={item.quantity} price={item.price}
                        onAdd={addCartItemHandler} onRemove={removeCartItemHandler}/>
                ))
            }
        </ul>;

    return (
        <Modal onClose={props.onClose}>
            {cartItems}
            <div className="total">
                <span>Total Price</span>
                <span>{totalPrice}</span>
            </div>
            <div className="actions">
                <button className="button--alt" type="button" onClick={props.onClose}>Close</button>
                {hasItems && <button className="button--order" type="button">Order</button>}
            </div>
        </Modal>
    );
}

export default Cart;
