import { FaSearch } from "react-icons/fa";

function SearchBar() {
    return (
        <div
            className="
                flex
                items-center
                bg-white
                rounded-2xl
                shadow-lg
                overflow-hidden
                w-full
                max-w-2xl
            "
        >
            <input
                type="text"
                placeholder="Search recipes, ingredients or categories..."
                className="
                    flex-1
                    px-6
                    py-4
                    outline-none
                    text-gray-700
                "
            />

            <button
                className="
                    bg-green-600
                    hover:bg-green-700
                    text-white
                    px-6
                    py-4
                    transition
                "
            >
                <FaSearch />
            </button>
        </div>
    );
}

export default SearchBar;