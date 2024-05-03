import "./Header.css";
import food from "../../../assets/food.jpg";
import HeaderCartButton from "../HeaderCartButton/HeaderCartButton";

const Header = props => {

    return (
        <>
            <header className="header">
                <h1>Food Pantry</h1>
                <HeaderCartButton onClick={props.onDisplayCart}/>
            </header>
            <div className="main-image">
                <img src={food} alt="A table full of food!"/>
            </div>
        </>
    );
}

export default Header;
