import { Link } from "react-router-dom";

function SectionHeader({
    title,
    subtitle,
    action,
}) {
    return (
        <div className="flex justify-between items-end mb-8">

            <div>
                <h2 className="text-3xl font-bold text-slate-800">
                    {title}
                </h2>

                <p className="text-gray-500 mt-2">
                    {subtitle}
                </p>
            </div>

            {action && (
                <Link
                    to={action.link}
                    className="text-green-600 font-semibold hover:underline"
                >
                    {action.label} →
                </Link>
            )}

        </div>
    );
}

export default SectionHeader;