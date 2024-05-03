import "./MealItemForm.css";
import Input from "../../UI/Input/Input";
import {useRef, useState} from "react";

const MealItemForm = props => {

    const [quantityIsValid, setQuantityIsValid] = useState(true);

    const quantityInputReference = useRef();

    const input = {
        id: `quantity_input_${props.id}`,
        type: "number",
        min: "1",
        max: "5",
        step: "1",
        defaultValue: "1"
    }

    const errorMessage = !quantityIsValid && <p>Please enter a valid quantity (1-5).</p>;

    const submitHandler = event => {
        event.preventDefault();
        const enteredItemQuantity = +quantityInputReference.current["value"];
        if (!enteredItemQuantity || enteredItemQuantity < 1 || enteredItemQuantity > 5) {
            setQuantityIsValid(false);
            return;
        }
        setQuantityIsValid(true);
        props.onAddToCart(enteredItemQuantity);
    }

    return (
        <form className="form" onSubmit={submitHandler}>
            <Input label="Quantity" input={input} ref={quantityInputReference}/>
            <button type="submit">+ Add</button>
            {errorMessage}
        </form>
    );
}

export default MealItemForm;
