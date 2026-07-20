function RecipeIngredients({ ingredients }) {

    return (

        <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-5">

                Ingredients

            </h2>

            <ul className="space-y-3">

                {ingredients.map(item => (

                    <li
                        key={item.id}
                        className="flex justify-between border-b pb-2"
                    >

                        <span>

                            {item.ingredient}

                        </span>

                        <span className="font-semibold">

                            {item.quantity}

                        </span>

                    </li>

                ))}

            </ul>

        </div>

    );

}

export default RecipeIngredients;