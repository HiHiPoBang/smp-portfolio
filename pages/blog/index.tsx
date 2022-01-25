import type { NextPage, GetServerSideProps } from 'next';
import NextImage from 'next/image';
import tw from 'tailwind-styled-components';
import { getPosts } from '../../lib/api';
import * as R from 'ramda';
import { IPost } from '../../types/post';
import { Layout, H3, SiteLink } from '../../components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  posts: IPost[];
  total: number;
  page: number;
  size: number;
};
const Blog: NextPage<Props> = ({ posts, total, page, size }: Props) => {
  const renderPagination = (isNextPage: boolean) => {
    const pageNumber = isNextPage ? page + 1 : page - 1;
    const iconType = isNextPage ? 'angle-right' : 'angle-left';
    const text = isNextPage ? 'Next Page' : 'Previous Page';
    const isVisible = isNextPage
      ? () => {
          const maxPage = Math.floor(total / size) + (total % size === 0 ? 0 : 1);
          return pageNumber < maxPage;
        }
      : () => pageNumber > 0;
    return isVisible() ? (
      <SiteLink herf={`/blog/?page=${pageNumber}`}>
        <FontAwesomeIcon icon={['fas', iconType]} />
        {text}
      </SiteLink>
    ) : null;
  };
  return (
    <Layout>
      <div className="pt-14 flex flex-col items-center">
        {posts.map((post) => (
          <PostWrapper key={post.slug}>
            <Thumbnail>
              <SiteLink herf={`/blog/${post.slug}`}>
                <NextImage
                  src={post.metaData.thumbnailUrl}
                  layout="responsive"
                  objectFit="cover"
                  width="100%"
                  height="70px"
                />
              </SiteLink>
            </Thumbnail>
            <Briefly>
              <SiteLink herf={`/blog/${post.slug}`}>
                <Title>{post.metaData.title}</Title>
              </SiteLink>
              <FooterLabel>{post.metaData.date}</FooterLabel>
              <Description>{post.metaData.description}</Description>
              <SiteLink herf={`/blog/${post.slug}`}>
                <FooterLabel className="w-full text-right">more...</FooterLabel>
              </SiteLink>
            </Briefly>
          </PostWrapper>
        ))}
        <div className="flex justify-between">
          {renderPagination(false)}
          {renderPagination(true)}
        </div>
      </div>
    </Layout>
  );
};

const isPageValidate = (page: string | string[] | undefined) => {
  return R.type(page) !== 'Array' && !isNaN(Number(page)) && Number(page) > 0;
};
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const hasPage = R.has('page');
  const page = R.isEmpty(query) ? 1 : !isPageValidate(query.page) || !hasPage(query) ? 0 : Number(query.page);
  const size = 10;
  const { total, posts } = getPosts({ page, size });
  return {
    props: {
      posts,
      total,
      page,
      size,
    },
  };
};
const PostWrapper = tw.div`
  grid
  sm:grid-cols-12
  grid-cols-1
  mx-2
  mb-4
  md:w-full
  max-w-screen-md
  p-4
  min-h-[200px]
  border
  divide-y
  divide-gray-200
  bg-gray-50
`;
const Thumbnail = tw.figure`
  sm:col-span-4
  mb-4
  lg:mb-0
  w-full
`;
const Briefly = tw.section`
  sm:col-span-8
  flex
  flex-col
  h-full
  sm:pl-5
  px-1
`;
const Title = tw(H3)`
  mt-e
`;
const Description = tw.p`
  grow
  mt-2
  mb-4
  margin: 0.5rem 0 1rem 0;
  line-clamp-3
  text-gray-800
  text-base
`;
const FooterLabel = tw.label`
  inline-block
  text-gray-400
  text-base
`;

export default Blog;
