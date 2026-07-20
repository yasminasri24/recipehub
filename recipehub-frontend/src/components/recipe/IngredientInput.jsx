function IngredientInput({ form, setForm }) {

    const addIngredient = () => {

        setForm({

            ...form,

            ingredients: [

                ...form.ingredients,

                {

                    ingredient: "",

                    quantity: "",

                },

            ],

        });

    };

    const removeIngredient = (index) => {

        const updated = [...form.ingredients];

        updated.splice(index, 1);

        setForm({

            ...form,

            ingredients: updated,

        });

    };

    const handleChange = (index, field, value) => {

        const updated = [...form.ingredients];

        updated[index][field] = value;

        setForm({

            ...form,

            ingredients: updated,

        });

    };

    return (

        <div className="space-y-4">

            <h2 className="text-2xl font-bold">

                Ingredients

            </h2>

            {form.ingredients.map((ingredient, index) => (

                <div
                    key={index}
                    className="flex gap-3 items-center"
                >

                    <input
                        type="text"
                        placeholder="Ingredient"
                        value={ingredient.ingredient}
                        onChange={(e) =>
                            handleChange(
                                index,
                                "ingredient",
                                e.target.value
                            )
                        }
                        className="flex-1 border rounded-lg p-3"
                    />

                    <input
                        type="text"
                        placeholder="Quantity"
                        value={ingredient.quantity}
                        onChange={(e) =>
                            handleChange(
                                index,
                                "quantity",
                                e.target.value
                            )
                        }
                        className="w-40 border rounded-lg p-3"
                    />

                    {form.ingredients.length > 1 && (

                        <button
                            type="button"
                            onClick={() =>
                                removeIngredient(index)
                            }
                            className="
                                bg-red-500
                                hover:bg-red-600
                                text-white
                                px-4
                                py-3
                                rounded-lg
                            "
                        >

                            Remove

                        </button>

                    )}

                </div>

            ))}

            <button
                type="button"
                onClick={addIngredient}
                className="
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    px-5
                    py-2
                    rounded-lg
                "
            >

                + Add Ingredient

            </button>

        </div>

    );

}

export default IngredientInput;
