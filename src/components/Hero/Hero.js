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
        Student, Keen Learner, Always Ready For a Good Change.<br/>
        Knows Flutter, Firebase, Python, DS Algo and much more!<br/>
        Started Exploring ML.<br/>
        Smash the bellow button to hit me a mail!
      </SectionText>
      <Button onClick={()=>window.location = 'mailto: rushikeshnarwade53@gmail.com"'}>Learn More</Button>

    </LeftSection>

  </Section>
);

export default Hero;