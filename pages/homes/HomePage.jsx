//@/pages/homes/HomePage
import HomeSection from '@/pages/homes/components/HomeSection';
import ProjetsSection from '@/pages/homes/components/ProjetsSection';
import SkillSection from '@/pages/homes/components/SkillSection';
import EducationSection from '@/pages/homes/components/EducationSection';

export default function HomePage() {
   return (
      <div>
         <HomeSection />
         <EducationSection />
         <SkillSection />
         <ProjetsSection />
      </div>
   );
}
