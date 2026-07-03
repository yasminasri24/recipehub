function Input({
    label,
    type = "text",
    placeholder,
    ...props
}) {
    return (
        <div className="mb-5">

            <label className="block mb-2 font-medium">
                {label}
            </label>

            <input
                type={type}
                placeholder={placeholder}
                className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:ring-2
                    focus:ring-green-500
                "
                {...props}
            />

        </div>
    );
}

export default Input;