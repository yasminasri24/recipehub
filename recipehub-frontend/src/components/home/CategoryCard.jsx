function CategoryCard({

    emoji,

    title,

}) {

    return (

        <div
            className="
                min-w-40
                bg-white
                rounded-2xl
                shadow
                p-8
                hover:shadow-lg
                transition
                cursor-pointer
                text-center
            "
        >

            <div className="text-5xl">

                {emoji}

            </div>

            <h3 className="font-semibold mt-4">

                {title}

            </h3>

        </div>

    );

}

export default CategoryCard;