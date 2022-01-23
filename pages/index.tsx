import type { NextPage } from 'next';
import NextImage from 'next/image';
import { Layout } from '../components';
import { H2 } from '../components';

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="relative flex flex-col flex-start lg:items-end pb-16 w-full min-h-screen max-h-screen">
        <section className={`lg:fixed lg:left-24 xl:left-[12%] mt-14 w-full lg:w-1/5 xl:w-[15%] shadow-sm shadow-gray-200 bg-primary`}>
          <div className="flex flex-col items-center w-full h-auto pb-6">
            <figure className="mb-6 lg:mb-0 w-full max-w-[400px] h-[300px] lg:h-auto p-0 lg:pt-4 overflow-hidden">
              <NextImage
                src="/assets/home/avatar.svg"
                layout="responsive"
                objectFit="cover"
                width="100%"
                height="100%"
              />
            </figure>
            <H2>Iris Pai</H2>
            <p>Software Engineer</p>
          </div>
          <div className='w-full bg-gray-50'>
              12312
          </div>
        </section>
        <section className="lg:my-14 lg:mr-24 xl:mr-[12%] w-full lg:w-7/12 min-h-screen bg-gray-50 shadow-sm shadow-gray-100">

        </section>
        <section className="mr-24 xl:mr-[12%] w-full lg:w-7/12 min-h-screen bg-gray-50 shadow-sm shadow-gray-100">

        </section>
      </div>
    </Layout>
  );
};

export default Home;
