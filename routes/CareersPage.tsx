import Footer from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import SharedHero from "@/components/shared/Hero";

const CareersPage = () => {
      const { t } = useLanguage();
    
    return <div className="min-h-screen flex flex-col transition-all duration-300">
       
        <main className="flex-grow">
          <SharedHero hero={t('careers.hero')} imgSrc={'/hr.png'}/>
          
        </main>
        <Footer />
      </div>
}

export default CareersPage;