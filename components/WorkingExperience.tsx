import type { ReactNode } from 'react';
import tw from 'tailwind-styled-components';
import { H3, H4, H5 } from '.';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Experience = () => {
  return (
    <>
      <Title>Wroking Experience</Title>
      <ExperienceBlock>
        <CompanyBlock>
          <Company>InQuartik</Company>
          <YearRange>(2017 - current)</YearRange>
        </CompanyBlock>
        <WorkingContentList>
          <WorkingItem>
            <WorkingContent>Refactor and develop progressively</WorkingContent>
            <WorkingDescription>
              With clean code and unit test by <em>Jest</em>, reducing bugs and keeping agile development.{' '}
            </WorkingDescription>
          </WorkingItem>
          <WorkingItem>
            <WorkingContent>UI components for all products</WorkingContent>
            <WorkingDescription>
              Use <em>styled-components</em> and <em>Storybook</em> to refactor and implement UI-components library that
              close cooperation with UI/UX designers.
            </WorkingDescription>
          </WorkingItem>
          <WorkingItem>
            <WorkingContent>Standard Essential Patents</WorkingContent>
            <WorkingDescription>
              A dashboard to analysis global standard essential patents. <em>(Vue, Vuex, Highcharts)</em>
              <IntroLink link="https://www.inquartik.com.tw/patentcloud/sep-omnilytics/" />
            </WorkingDescription>
          </WorkingItem>
          <WorkingItem>
            <WorkingContent>Due Diligence </WorkingContent>
            <WorkingDescription>
              One-click to analysis patent information and generate a varity of charts. <em>(Vue, Vuex, Highcharts)</em>
              <IntroLink link="https://www.inquartik.com.tw/patentcloud/due-diligence/" />
            </WorkingDescription>
          </WorkingItem>
          <WorkingItem>
            <WorkingContent>IP EXPLEX</WorkingContent>
            <WorkingDescription>
              A patent transaction platform with seller’s and buyer’s management interface. <em>(Vue, Vuex)</em>
            </WorkingDescription>
          </WorkingItem>
        </WorkingContentList>
      </ExperienceBlock>
    </>
  );
};

const Title = tw(H3)`
  text-gray-500
`;
const ExperienceBlock = tw.div`
`;
const CompanyBlock = tw.div`
  flex
  items-center
`;
const Company = tw(H4)`
  mr-2
`;
const YearRange = tw.label`
  text-sm
  text-gray-400
`;

const WorkingContentList = tw.ul`
  md:ml-4
`;
const WorkingItem = tw.li`
  mt-2
`;
type IntroProps = {
  link: string;
};
const IntroLink = ({ link }: IntroProps) => {
  return (
    <a className="flex ml-1 pt-4 text-sm underline text-secondary" href={link} target="_blank" rel="noreferrer">
      <span>Product Introduction</span>
      <span className="inline-block ml-1 w-4">
        <FontAwesomeIcon size="sm" icon={['fas', 'arrow-up-right-from-square']} />
      </span>
    </a>
  );
};
type WorkingContentProps = {
  children: ReactNode;
};
const WorkingContent = ({ children }: WorkingContentProps) => {
  return (
    <div className="flex items-center">
      <div className="mr-2 w-4 text-secondary">
        <FontAwesomeIcon icon={['fas', 'caret-right']} />
      </div>
      <H5 className="text-secondary">{children}</H5>
    </div>
  );
};
const WorkingDescription = tw.p`
  ml-4
  text-base
  text-primary
`;

export default Experience;
