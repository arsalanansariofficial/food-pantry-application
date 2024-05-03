import "./AvailableMeals.css";
import Card from "../../UI/Card/Card";
import MealItem from "../MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: '1',
        name: 'Cappuccino',
        description: 'A variant of coffee!',
        price: 10,
    },
    {
        id: '2',
        name: 'Espresso',
        description: 'A variant of coffee!',
        price: 10,
    },
    {
        id: '3',
        name: 'Cold Coffee',
        description: 'A coffee with a frost!',
        price: 10,
    }
];

const AvailableMeals = () => {

    const mealsList = DUMMY_MEALS.map(meal => (
        <MealItem id={meal.id} key={meal.id} name={meal.name}
                  description={meal.description} price={meal.price}/>
    ));

    return (
        <section className="meals">
            <Card>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    );
}

export default AvailableMeals;
