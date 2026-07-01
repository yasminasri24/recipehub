function Button({
    children,
    variant = "primary",
    size = "md",
    className = "",
    ...props
}) {

    const variants = {

        primary:
            "bg-green-600 text-white hover:bg-green-700",

        secondary:
            "border border-green-600 text-green-600 hover:bg-green-50",

        danger:
            "bg-red-600 text-white hover:bg-red-700",

    };

    const sizes = {

        sm: "px-3 py-2 text-sm",

        md: "px-5 py-2.5",

        lg: "px-7 py-3",

    };

    return (

        <button

            className={`
                rounded-xl
                font-medium
                transition-all
                duration-300
                ${variants[variant]}
                ${sizes[size]}
                ${className}
            `}

            {...props}

        >

            {children}

        </button>

    );

}

export default Button;