import { Link } from "react-router-dom";

function SectionHeader({

    title,

    subtitle,

    action,
    
    actionLink = "#",
}) {

    return (

        <div className="flex justify-between items-end mb-8">

            <div>

                <h2 className="text-3xl font-bold">

                    {title}

                </h2>

                <p className="text-gray-500 mt-2">

                    {subtitle}

                </p>

            </div>

            {action && (
                <Link
                    to={actionLink}
                    className="text-green-600 font-semibold hover:text-green-700 transition"
                >
                    {action} →
                </Link>
            )}

        </div>
    );
}

export default SectionHeader;