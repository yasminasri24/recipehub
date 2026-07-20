import { useState } from "react";

function ImageUploader({ form, setForm }) {

    const [preview, setPreview] = useState(null);

    const handleImageChange = (e) => {

        const file = e.target.files[0];

        if (!file) return;

        setForm({
            ...form,
            image: file,
        });

        setPreview(URL.createObjectURL(file));

    };

    return (

        <div className="space-y-4">

            <h2 className="text-2xl font-bold">

                Recipe Image

            </h2>

            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-6">

                {preview ? (

                    <img
                        src={preview}
                        alt="Preview"
                        className="
                            w-full
                            h-72
                            object-cover
                            rounded-xl
                        "
                    />

                ) : (

                    <div
                        className="
                            h-72
                            flex
                            items-center
                            justify-center
                            text-gray-400
                        "
                    >

                        No image selected

                    </div>

                )}

            </div>

            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="recipe-image"
            />

            <label
                htmlFor="recipe-image"
                className="
                    inline-block
                    bg-orange-500
                    hover:bg-orange-600
                    text-white
                    px-6
                    py-3
                    rounded-xl
                    cursor-pointer
                "
            >

                {preview ? "Change Image" : "Choose Image"}

            </label>

        </div>

    );

}

export default ImageUploader;