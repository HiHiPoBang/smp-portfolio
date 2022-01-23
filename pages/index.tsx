import type { NextPage } from 'next';
import NextImage from 'next/image';
import tw from 'tailwind-styled-components';
import { Layout } from '../components';
import { H2, H3 } from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <ContentWrapper>
        <UserInfoSection>
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
            <H3>Software Engineer</H3>
          </UserAvatarBlock>
          <UserDetailInfoBlock>12312</UserDetailInfoBlock>
        </UserInfoSection>
        <ExperienceSection></ExperienceSection>
        <ExperienceSection></ExperienceSection>
      </ContentWrapper>
    </Layout>
  );
};
const ContentWrapper = tw.div`
  flex
  flex-col
  flex-start
  lg:items-end
  pb-16
  w-full
`;
const UserInfoSection = tw.section`
  lg:fixed
  lg:left-24
  xl:left-[12%]
  mt-14
  w-full
  lg:w-1/5
  xl:w-[15%]
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
  p-0
  lg:pt-4
  overflow-hidden
`;
const UserDetailInfoBlock = tw.div`
  w-full
  bg-gray-50
`;
const ExperienceSection = tw.section`
  lg:mt-14
  lg:mr-24
  xl:mr-[12%]
  w-full
  lg:w-7/12
  min-h-screen
  bg-gray-50
  shadow-sm
  shadow-gray-100
`;

export default Home;
