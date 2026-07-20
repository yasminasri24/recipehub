import { useEffect, useState } from "react";
import api from "../../services/api";


function TagSelector({ form, setForm }) {


    const [tags, setTags] = useState([]);


    useEffect(() => {

        fetchTags();

    }, []);



    const fetchTags = async () => {

        try {

            const response = await api.get("/tags");

            setTags(response.data.data);


        } catch(error) {

            console.log(error);

        }

    };



    const toggleTag = (id) => {


        let selected = [...form.tags];


        if(selected.includes(id)) {

            selected = selected.filter(
                tag => tag !== id
            );

        }

        else {

            selected.push(id);

        }


        setForm({

            ...form,

            tags:selected

        });


    };



    return (

        <div className="space-y-3">


            <h2 className="text-2xl font-bold">

                Tags

            </h2>



            <div className="
                flex
                flex-wrap
                gap-3
            ">


                {tags.map(tag => (

                    <button

                        type="button"

                        key={tag.id}

                        onClick={() =>
                            toggleTag(tag.id)
                        }

                        className={

                            form.tags.includes(tag.id)

                            ?

                            "bg-orange-500 text-white px-4 py-2 rounded-full"

                            :

                            "bg-gray-100 px-4 py-2 rounded-full"

                        }

                    >

                        {tag.name}


                    </button>

                ))}


            </div>


        </div>

    );

}


export default TagSelector;