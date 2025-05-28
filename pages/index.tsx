import {NextPage} from 'next';

import About from '../components/About';
import PublicationList from '../components/PublicationList';
import Teaching from '../components/Teaching';
import Education from '../components/Education';
import SkillsList from '../components/skillSection';


const Index: NextPage<unknown> = () => (
    <>
        <About/>
        <Education/>
        <SkillsList/>
        
    </>
);

export default Index;
