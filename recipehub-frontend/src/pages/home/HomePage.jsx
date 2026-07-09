import MainLayout from "../../components/layout/MainLayout";

import HeroSection from "../../components/home/HeroSection";
import TrendingSection from "../../components/home/TrendingSection";
import CategorySection from "../../components/home/CategorySection";
import RecipeOfTheDay from "../../components/home/RecipeOfTheDay";
import QuickEasySection from "../../components/home/QuickEasySection";
import HealthySection from "../../components/home/HealthySection";
import BecomeCreatorSection from "../../components/home/BecomeCreatorSection";
import { useAuth } from "../../contexts/AuthContext";

function HomePage() {

    const { user, isAuthenticated } = useAuth();

    return (

        <MainLayout>

            {
                isAuthenticated && (

                    <div className="max-w-7xl mx-auto mt-8">

                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">

                            <h2 className="text-2xl font-bold">

                                Welcome back,
                                {" "}
                                {user.name} 👋

                            </h2>

                            <p className="text-gray-600 mt-2">

                                Continue discovering delicious recipes today.

                            </p>

                        </div>

                    </div>

                )
            }

            <HeroSection />

            <TrendingSection />

            <CategorySection />

            <RecipeOfTheDay />

            <QuickEasySection />

            <HealthySection />

            <BecomeCreatorSection />

        </MainLayout>

    );

}

export default HomePage;