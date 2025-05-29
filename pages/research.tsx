import {NextPage} from 'next';
import {useState} from 'react';

import ResearchInterests from '../components/ResearchInterests';
import PublicationList from '../components/PublicationList'

const ResearchPage: NextPage = () => (
  <>
    <ResearchInterests />
    <PublicationList/>
  </>
);

export default ResearchPage;