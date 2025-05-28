import { NextPage } from 'next';
import About from '../components/About';
import Education from '../components/Education';
import ProfessionalExperience from '../components/ProfessionalExperience';
import UniversityExperience from '../components/UniversityExperience';
import SkillsList from '../components/skillSection';
import PublicationList from '../components/PublicationList';
import Teaching from '../components/Teaching';

const Experience: NextPage<unknown> = () => (
  <>
    <ProfessionalExperience />
    <UniversityExperience />
  </>
);

export default Experience;