function StepInput({ form, setForm }) {

    const addStep = () => {

        setForm({

            ...form,

            steps: [

                ...form.steps,

                {

                    instruction: "",

                },

            ],

        });

    };

    const removeStep = (index) => {

        const updated = [...form.steps];

        updated.splice(index, 1);

        setForm({

            ...form,

            steps: updated,

        });

    };

    const handleChange = (index, value) => {

        const updated = [...form.steps];

        updated[index].instruction = value;

        setForm({

            ...form,

            steps: updated,

        });

    };

    return (

        <div className="space-y-5">

            <h2 className="text-2xl font-bold">

                Cooking Steps

            </h2>

            {form.steps.map((step, index) => (

                <div
                    key={index}
                    className="space-y-2"
                >

                    <div className="flex justify-between items-center">

                        <h3 className="font-semibold">

                            Step {index + 1}

                        </h3>

                        {form.steps.length > 1 && (

                            <button
                                type="button"
                                onClick={() => removeStep(index)}
                                className="
                                    bg-red-500
                                    hover:bg-red-600
                                    text-white
                                    px-4
                                    py-2
                                    rounded-lg
                                "
                            >

                                Remove

                            </button>

                        )}

                    </div>

                    <textarea
                        rows="4"
                        placeholder="Describe this cooking step..."
                        value={step.instruction}
                        onChange={(e) =>
                            handleChange(index, e.target.value)
                        }
                        className="
                            w-full
                            border
                            rounded-lg
                            p-3
                            resize-none
                        "
                    />

                </div>

            ))}

            <button
                type="button"
                onClick={addStep}
                className="
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    px-5
                    py-2
                    rounded-lg
                "
            >

                + Add Step

            </button>

        </div>

    );

}

export default StepInput;
