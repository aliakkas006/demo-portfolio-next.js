import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row padding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        My main service is to help the client for building MERN stack web application with latest web technology...
      </SectionText>
      <Button onClick={() => window.location ='https://www.linkedin.com/in/ali-akkas-432a9a1ba/'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;