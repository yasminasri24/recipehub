import { useEffect, useState } from "react";
import api from "../../services/api";

function CategorySelector({ form, setForm }) {

    const [categories, setCategories] = useState([]);

    useEffect(() => {

        fetchCategories();

    }, []);


    const fetchCategories = async () => {

        try {

            const response = await api.get("/categories");

            setCategories(response.data.data);

        } catch (error) {

            console.log(error);

        }

    };


    return (

        <div>

            <label className="font-semibold">

                Category

            </label>


            <select

                name="category_id"

                value={form.category_id}

                onChange={(e) =>
                    setForm({

                        ...form,

                        category_id: e.target.value

                    })
                }

                className="
                    w-full
                    border
                    rounded-lg
                    p-3
                    mt-2
                "

            >

                <option value="">

                    Select Category

                </option>


                {categories.map(category => (

                    <option

                        key={category.id}

                        value={category.id}

                    >

                        {category.name}

                    </option>

                ))}


            </select>

        </div>

    );

}


export default CategorySelector;