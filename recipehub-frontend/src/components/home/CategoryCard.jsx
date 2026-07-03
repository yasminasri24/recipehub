function CategoryCard({

    emoji,

    title,

    recipes

}) {

    return (

        <div
            className="
            min-w-52
            bg-white
            rounded-3xl
            p-8
            shadow
            hover:-translate-y-2
            transition
            cursor-pointer
            "
        >

            <div className="text-6xl">

                {emoji}

            </div>

            <h3 className="font-bold text-xl mt-5">

                {title}

            </h3>

            <p className="text-gray-500 mt-2">

                {recipes} Recipes

            </p>

        </div>

    );

}

export default CategoryCard;