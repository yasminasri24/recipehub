import { useState } from "react";

import IngredientInput from "./IngredientInput";
import StepInput from "./StepInput";
import TagSelector from "./TagSelector";
import ImageUploader from "./ImageUploader";
import CategorySelector from "./CategorySelector";

function RecipeForm({ onSubmit, initialData = null, }) {

    const [form, setForm] = useState({

        title: initialData?.title ?? "",

        description: initialData?.description ?? "",

        category_id: initialData?.category_id ?? "",

        cooking_time: initialData?.cooking_time ?? "",

        servings: initialData?.servings ?? "",

        difficulty: initialData?.difficulty ?? "Easy",

        image: null,

        ingredients:
            initialData?.ingredients ??
            [
                {
                    ingredient: "",
                    quantity: "",
                },
            ],

        steps:
            initialData?.steps ??
            [
                {
                    instruction: "",
                },
            ],

        tags:
            initialData?.tags?.map(tag => tag.id) ??
            [],

    });

    const handleChange = (e) => {

        setForm({

            ...form,

            [e.target.name]: e.target.value,

        });

    };

    const submit = (e) => {

        e.preventDefault();

        onSubmit(form);

    };

    return (

        <form
            onSubmit={submit}
            className="space-y-8"
        >

            {/* Title */}

            <div>

                <label className="font-semibold">

                    Recipe Title

                </label>

                <input

                    type="text"

                    name="title"

                    value={form.title}

                    onChange={handleChange}

                    className="w-full border rounded-lg p-3 mt-2"

                />

            </div>

            {/* Description */}

            <div>

                <label className="font-semibold">

                    Description

                </label>

                <textarea

                    rows="4"

                    name="description"

                    value={form.description}

                    onChange={handleChange}

                    className="w-full border rounded-lg p-3 mt-2"

                />

                <CategorySelector
                    form={form}
                    setForm={setForm}
                />

            </div>

            {/* Cooking Time */}

            <div>

                <label className="font-semibold">

                    Cooking Time (Minutes)

                </label>

                <input

                    type="number"

                    name="cooking_time"

                    value={form.cooking_time}

                    onChange={handleChange}

                    className="w-full border rounded-lg p-3 mt-2"

                />

            </div>

            {/* Servings */}

            <div>

                <label className="font-semibold">

                    Servings

                </label>

                <input

                    type="number"

                    name="servings"

                    value={form.servings}

                    onChange={handleChange}

                    className="w-full border rounded-lg p-3 mt-2"

                />

            </div>

            {/* Difficulty */}

            <div>

                <label className="font-semibold">

                    Difficulty

                </label>

                <select

                    name="difficulty"

                    value={form.difficulty}

                    onChange={handleChange}

                    className="w-full border rounded-lg p-3 mt-2"

                >

                    <option>Easy</option>

                    <option>Medium</option>

                    <option>Hard</option>

                </select>

            </div>

            <ImageUploader
                form={form}
                setForm={setForm}
            />

            <IngredientInput
                form={form}
                setForm={setForm}
            />

            <StepInput
                form={form}
                setForm={setForm}
            />

            <TagSelector
                form={form}
                setForm={setForm}
            />

            <button

                className="
                bg-orange-500
                hover:bg-orange-600
                text-white
                px-8
                py-3
                rounded-xl
                "
            >
                {initialData
                    ? "Update Recipe"
                    : "Publish Recipe"}

            </button>

        </form>

    );

}

export default RecipeForm;
