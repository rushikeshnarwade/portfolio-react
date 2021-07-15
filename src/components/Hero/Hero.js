import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        The purpose of Rushikesh Narwade is to help indivisuals, startups and companies achieving their goals by powering with new technlogy world!
      </SectionText>
      <Button onClick={()=>window.location = 'mailto: rushikeshnarwade53@gmail.com"'}>Learn More</Button>

    </LeftSection>

  </Section>
);

export default Hero;