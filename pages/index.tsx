import type { NextPage } from 'next';
import NextImage from 'next/image';
import tw from 'tailwind-styled-components';
import { Layout } from '../components';
import { H2, H4, Introduction } from '../components';

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
            <section className="mt-2 text-center text-gray-700">Learning FP and be a clean coder.</section>
          </UserAvatarBlock>
          <UserDetailInfoBlock></UserDetailInfoBlock>
        </UserInfoBlock>
        <ExperienceBlock>
          <Introduction />
        </ExperienceBlock>
        <ExperienceBlock></ExperienceBlock>
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
const UserInfoBlock = tw.section`
  lg:fixed
  lg:left-24
  xl:left-[12%]
  mt-14
  px-2
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
  p-0
  lg:pt-4
  overflow-hidden
`;
const UserDetailInfoBlock = tw.div`
  w-full
  bg-gray-50
`;
const ExperienceBlock = tw.section`
  lg:mt-14
  lg:mr-24
  xl:mr-[12%]
  p-6
  md:p-12
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
