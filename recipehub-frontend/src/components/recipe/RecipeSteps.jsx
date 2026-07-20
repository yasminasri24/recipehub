function RecipeSteps({ steps }) {

    return (

        <div className="bg-white rounded-2xl shadow-md p-6">

            <h2 className="text-2xl font-bold mb-5">

                Cooking Steps

            </h2>

            <div className="space-y-6">

                {steps.map(step => (

                    <div
                        key={step.id}
                        className="flex gap-4"
                    >

                        <div
                            className="
                            w-10
                            h-10
                            rounded-full
                            bg-orange-500
                            text-white
                            flex
                            items-center
                            justify-center
                            font-bold
                            "
                        >

                            {step.step_number}

                        </div>

                        <p className="flex-1">

                            {step.instruction}

                        </p>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default RecipeSteps;