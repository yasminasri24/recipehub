import Logo from "../common/Logo";

function AuthLayout({ title, subtitle, children }) {
    return (
        <div className="min-h-screen bg-green-50 flex items-center justify-center px-6">

            <div className="bg-white rounded-3xl shadow-xl w-full max-w-md p-10">

                <div className="flex justify-center mb-8">
                    <Logo />
                </div>

                <h1 className="text-3xl font-bold text-center">
                    {title}
                </h1>

                <p className="text-gray-500 text-center mt-2 mb-8">
                    {subtitle}
                </p>

                {children}

            </div>

        </div>
    );
}

export default AuthLayout;