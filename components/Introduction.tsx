import tw from 'tailwind-styled-components';
import { H3 } from './H';
import { DividerLine } from '.';

const Introduction = () => (
  <>
    <section className="text-primary">
      <b>Hi, I’m Iris</b>
      <br />I am a driven guy who enjoys coding. I have 4+ years experience on web frontend development. Also, I’m good
      at communicating with people. Therefore, I cooperate well with my teammates and provide good services and products
      for clients. I enjoy solving problems no matter it’s about programming or business logic.
    </section>
    <DividerLine />
    <InfoBlock>
      <InfoTitle>Personal Information</InfoTitle>
      <InfoItem>
        <InfoLabel>E-mail</InfoLabel>
        <InfoSpan>hihipobang@gmail.com</InfoSpan>
      </InfoItem>
      <InfoItem>
        <InfoLabel>hobbies</InfoLabel>
        <InfoSpan>Reading, cooking and painting</InfoSpan>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Education</InfoLabel>
        <InfoSpan>Master of CSE / National Chung Hsing University</InfoSpan>
      </InfoItem>
    </InfoBlock>
    <InfoBlock>
      <InfoTitle>Skills</InfoTitle>
      <InfoItem>
        <InfoLabel>Programming Language</InfoLabel>
        <br />
        <InfoSpan>Javascript, ES6, CSS3, Sass, stylus, HTML5</InfoSpan>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Framework</InfoLabel>
        <br />
        <InfoSpan>Vue.js 2.0</InfoSpan>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Have experience</InfoLabel>
        <br />
        <InfoSpan>Webpack, Highcharts, Bootstrap, styled-components, Storybook, Tailwind CSS, Lodash, Ramda</InfoSpan>
      </InfoItem>
      <InfoItem>
        <InfoLabel>Now learning</InfoLabel>
        <br />
        <InfoSpan>TypeScript, React, Next.js, Jest, Enzyme</InfoSpan>
      </InfoItem>
    </InfoBlock>
  </>
);

const InfoBlock = tw.div`
mb-4
`;
const InfoTitle = tw(H3)`
my-3
text-gray-500
`;
const InfoItem = tw.div`
mb-2
`;
const InfoLabel = tw.label`
inline-block
mr-2
min-w-full
md:min-w-[100px]
uppercase
text-base
text-gray-400
`;
const InfoSpan = tw.span`
text-base
`;

export default Introduction;
