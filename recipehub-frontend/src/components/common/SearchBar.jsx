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
                max-w-2xl
            "
        >

            <input

                type="text"

                placeholder="Search recipes..."

                className="
                    flex-1
                    px-6
                    py-4
                    outline-none
                "
            />

            <button
                className="
                    bg-green-600
                    text-white
                    px-6
                    py-4
                "
            >

                <FaSearch />

            </button>

        </div>

    );

}

export default SearchBar;