function Card({ children }) {

    return (

        <div
            className="
                bg-white
                rounded-2xl
                shadow-sm
                hover:shadow-lg
                transition
                duration-300
                p-6
            "
        >

            {children}

        </div>

    );

}

export default Card;