import type { NextPage, GetServerSideProps } from 'next';
import NextImage from 'next/image';
import styled from 'styled-components';
import {
  REGULAR_FONT_COLOR,
  PRIMARY_FONT_SIZE,
  SECONDARY_FONT_COLOR,
  REGULAR_FONT_SIZE,
  BORDER_LIGHT_COLOR,
} from '../../components/stylesConfig';
import { getPosts } from '../../lib/api';
import * as R from 'ramda';
import { IPost } from '../../types/post';
import { Layout, H3, SiteLink } from '../../components';

const PostContainer = styled.div`
  min-height: 200px;
  border-bottom: 1px solid ${BORDER_LIGHT_COLOR};
`;
const Description = styled.p`
  margin: 0.5rem 0 1rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${REGULAR_FONT_COLOR};
  font-size: ${PRIMARY_FONT_SIZE};
`;
const FooterLabel = styled.label`
  display: inline-block;
  color: ${SECONDARY_FONT_COLOR};
  font-size: ${REGULAR_FONT_SIZE};
`;
type Props = {
  posts: IPost[];
  total: number;
  page: number;
  size: number;
};
const Blog: NextPage<Props> = ({ posts, total, page, size }: Props) => {
  const renderPagination = (isNextPage: boolean) => {
    const pageNumber = isNextPage ? page + 1 : page - 1;
    const text = isNextPage ? 'Next Page' : 'Previous Page';
    const isVisible = isNextPage
      ? () => {
          const maxPage = Math.floor(total / size) + (total % size === 0 ? 0 : 1);
          return pageNumber < maxPage;
        }
      : () => pageNumber > 0;
    return isVisible() ? <SiteLink herf={`/blog/?page=${pageNumber}`}>{text}</SiteLink> : null;
  };
  return (
    <Layout>
      <div className="mt-14 flex flex-col items-center">
        {posts.map((post) => (
          <PostContainer
            key={post.slug}
            className="grid sm:grid-cols-12 grid-cols-1 mx-2 mb-4 md:w-full max-w-screen-md p-4 bg-gray-50"
          >
            <figure className="sm:col-span-4 mb-4 lg:mb-0 w-full">
              <SiteLink herf={`/blog/${post.slug}`}>
                <NextImage
                  src={post.metaData.thumbnailUrl}
                  layout="responsive"
                  objectFit="cover"
                  width="100%"
                  height="70px"
                />
              </SiteLink>
            </figure>
            <section className="sm:col-span-8 flex flex-col h-full sm:pl-5 px-1">
              <SiteLink herf={`/blog/${post.slug}`}>
                <H3 className="mb-1">{post.metaData.title}</H3>
              </SiteLink>
              <FooterLabel>{post.metaData.date}</FooterLabel>
              <Description className="grow">{post.metaData.description}</Description>
              <SiteLink herf={`/blog/${post.slug}`}>
                <FooterLabel className="w-full text-right">more...</FooterLabel>
              </SiteLink>
            </section>
          </PostContainer>
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
export default Blog;
