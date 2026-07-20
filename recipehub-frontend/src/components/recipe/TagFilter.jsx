function TagFilter({
    tags,
    value,
    onChange,
}) {

    return (

        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="
                border
                rounded-lg
                px-4
                py-3
            "
        >

            <option value="">

                All Tags

            </option>

            {tags.map(tag => (

                <option
                    key={tag.id}
                    value={tag.id}
                >

                    {tag.name}

                </option>

            ))}

        </select>

    );

}

export default TagFilter;