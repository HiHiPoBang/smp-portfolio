import type { NextPage } from 'next';
import type { IconName } from '@fortawesome/fontawesome-common-types';
import NextImage from 'next/image';
import tw from 'tailwind-styled-components';
import { IconButton, Layout } from '../components';
import { H2, H4, Button, Introduction, WorkingExperience } from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <ContentWrapper>
        <UserInfoBlock>
          <UserAvatarBlock>
            <AvatarFig>
              <NextImage
                src="/assets/home/avatar.svg"
                layout="responsive"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </AvatarFig>
            <H2>Iris Pai</H2>
            <H4>Software Engineer</H4>
            <section className="px-8 text-center text-gray-700">Learning FP and be a clean coder.</section>
          </UserAvatarBlock>
          <UserDetailInfoBlock>
            <div className="flex justify-around">
              <IconLink link="https://github.com/HiHiPoBang" iconName="github" />
              <IconLink link="https://linkedin.com/in/pai-shu-min-iris-b84325189" iconName="linkedin" />
              <IconLink link="https://medium.com/@smp-iris" iconName="medium" />
            </div>
            <div className="mt-4">
              <a href="./Iris_Pai_Resume.pdf">
                <Button $isFullWidth={true} $isGhost={true}>
                  My Resume
                </Button>
              </a>
            </div>
          </UserDetailInfoBlock>
        </UserInfoBlock>
        <ExperienceBlock>
          <Introduction />
        </ExperienceBlock>
        <ExperienceBlock>
          <WorkingExperience />
        </ExperienceBlock>
      </ContentWrapper>
    </Layout>
  );
};
const ContentWrapper = tw.div`
  flex
  flex-col
  flex-start
  lg:items-end
  pt-14
  pb-16
  w-full
`;
const UserInfoBlock = tw.section`
  lg:fixed
  lg:left-24
  xl:left-[12%]
  w-full
  lg:w-1/5
  xl:w-[18%]
  shadow-sm
  shadow-gray-200
  bg-primary
`;
const UserAvatarBlock = tw.div`
  flex
  flex-col
  items-center
  w-full
  h-auto
  pb-6
`;
const AvatarFig = tw.figure`
  mb-6
  lg:mb-0
  w-full
  max-w-[400px]
  h-[300px]
  lg:h-auto
  overflow-hidden
`;
const UserDetailInfoBlock = tw.div`
  px-4
  py-4
  w-full
  bg-gray-50
`;

type IconLinkProp = {
  link: string;
  iconName: IconName;
};
const IconLink = ({ link, iconName }: IconLinkProp) => (
  <a href={link} target="_blank" rel="noreferrer">
    <IconButton $size="lg" $variant="secondary" $icon={['fab', iconName]} />
  </a>
);
const ExperienceBlock = tw.section`
  mb-4
  lg:mb-8
  lg:mr-24
  xl:mr-[12%]
  p-6
  w-full
  lg:w-7/12
  xl:w-[55%]
  bg-gray-50
  shadow-sm
  shadow-gray-100
  text-lg
  leading-12
  text-primary
`;

export default Home;
