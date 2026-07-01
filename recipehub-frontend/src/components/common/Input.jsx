function Input({

    label,

    type = "text",

    placeholder,

    ...props

}) {

    return (

        <div className="flex flex-col gap-2">

            <label className="font-medium">

                {label}

            </label>

            <input

                type={type}

                placeholder={placeholder}

                className="
                    border
                    rounded-xl
                    px-4
                    py-3
                    outline-none
                    focus:border-green-500
                "

                {...props}

            />

        </div>

    );

}

export default Input;