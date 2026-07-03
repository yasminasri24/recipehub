import MainLayout from "../../components/layout/MainLayout";

import HeroSection from "../../components/home/HeroSection";
import TrendingSection from "../../components/home/TrendingSection";
import CategorySection from "../../components/home/CategorySection";
import RecipeOfTheDay from "../../components/home/RecipeOfTheDay";
import QuickEasySection from "../../components/home/QuickEasySection";
import HealthySection from "../../components/home/HealthySection";
import BecomeCreatorSection from "../../components/home/BecomeCreatorSection";

function HomePage() {

    return (

        <MainLayout>

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