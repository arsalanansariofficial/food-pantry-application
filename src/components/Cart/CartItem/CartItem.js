import "./CartItem.css";

const CartItem = props => {

    const price = `$${props.price.toFixed(2)}`;

    const item = {
        id: props.id,
        name: props.name,
        quantity: props.quantity,
        price: props.price
    }

    return (
        <li className="cart-item">
            <div>
                <h2>{props.name}</h2>
                <div className="cart-item-summary">
                    <span className="cart-item-price">{price}</span>
                    <span className="cart-item-quantity">x {props.quantity}</span>
                </div>
            </div>
            <div className="cart-item-actions">
                <button onClick={() => props.onRemove(item.id)}>−</button>
                <button onClick={() => props.onAdd(item)}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
