function RecipeTags({ tags }) {

    return (

        <div className="flex flex-wrap gap-3">

            {tags.map(tag => (

                <span
                    key={tag.id}
                    className="
                    bg-orange-100
                    text-orange-600
                    px-4
                    py-2
                    rounded-full
                    "
                >

                    {tag.name}

                </span>

            ))}

        </div>

    );

}

export default RecipeTags;