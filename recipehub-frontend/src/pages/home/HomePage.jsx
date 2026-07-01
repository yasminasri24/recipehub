import MainLayout from "../../components/layout/MainLayout";

import HeroSection from "../../components/home/HeroSection";
import TrendingSection from "../../components/home/TrendingSection";
import CategorySection from "../../components/home/CategorySection";

function HomePage() {

    return (

        <MainLayout>

            <HeroSection />

            <TrendingSection />

            <CategorySection />

        </MainLayout>

    );

}

export default HomePage;