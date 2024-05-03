import "./MealItem.css";
import MealItemForm from "../MealItemForm/MealItemForm";
import {useContext} from "react";
import CartContext from "../../../store/cart-context";

const MealItem = props => {

    const price = `$${props.price.toFixed(2)}`;

    const cartContext = useContext(CartContext);

    const addToCartHandler = quantity => {
        const item = {
            id: props.id,
            name: props.name,
            quantity: quantity,
            price: props.price
        }
        cartContext.addItem(item);
    }

    return (
        <li className="meal">
            <div>
                <h3>{props.name}</h3>
                <div className="description">{props.description}</div>
                <div className="price">{price}</div>
            </div>
            <div>
                <MealItemForm id={props.id} onAddToCart={addToCartHandler}/>
            </div>
        </li>
    );
}

export default MealItem;
