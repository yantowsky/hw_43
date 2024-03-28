import Button from "../Button/Button";

const Menu = (props) => {
    const { pizzas } = props;
    return (
        <ul className="pizzas">
            {pizzas.map(pizza => {
                console.log(pizza.soldOut);
                const ingredient = pizza.ingredients;
                const arrIngredients = [];
                ingredient.forEach(element => {
                    arrIngredients.push(element[0].toUpperCase() + element.slice(1));
                });
                return (
                    <li key={pizza.id} className="pizza">
                        <img src={pizza.imageUrl} alt={pizza.name} className={pizza.soldOut ? "pizza__image pizza__image--mod" : "pizza__image"} />
                        <div className="pizza__info">
                            <p className="pizza__name">{pizza.name}</p>
                            <p className="pizza__ingredients">{(arrIngredients).join(", ")}</p>
                            <div className="pizza__actions">
                                {
                                    pizza.soldOut ?
                                        <p class="pizza__price">Sold out</p> :
                                        <p className="pizza__price">€{(pizza.unitPrice).toFixed(2)}</p>
                                }
                                {
                                    !pizza.soldOut && <Button text="Add to cart" type="submit" />
                                }
                            </div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default Menu;