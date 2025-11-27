import AboutSection from '../components/AboutSection';
import EducationSection from '../components/EducationSection';
import ProjectsSection from '../components/ProjectsSection';
import SkillsSection from '../components/SkillsSection';
import LanguagesSection from '../components/LanguagesSection';
import CertificationsSection from '../components/CertificationsSection';
import ActivitiesSection from '../components/ActivitiesSection';
import InterestsSection from '../components/InterestsSection';
import ReferencesSection from '../components/ReferencesSection';

export default function ResumePage() {
  return (
    <div className="bg-white dark:bg-black min-h-screen">
      <AboutSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <LanguagesSection />
      <CertificationsSection />
      <ActivitiesSection />
      <InterestsSection />
      <ReferencesSection />
    </div>
  );
} 