import type { NextPage, GetStaticProps } from 'next';
import NextImage from 'next/image';
import styled from 'styled-components';
import {
  REGULAR_FONT_COLOR,
  PRIMARY_FONT_SIZE,
  SECONDARY_FONT_COLOR,
  REGULAR_FONT_SIZE,
  BORDER_LIGHT_COLOR,
} from '../../components/stylesConfig';
import { getAllPosts } from '../../lib/api';
import { IPost } from '../../types/post';
import { Layout, H3, SiteLink } from '../../components';

const PostContainer = styled.div`
  height: 200px;
  border-bottom: 1px solid ${BORDER_LIGHT_COLOR};
  background-color: #ffffff;
`;
const Description = styled.p`
  margin: 0.5rem 0 1rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  color: ${REGULAR_FONT_COLOR};
  font-size: ${PRIMARY_FONT_SIZE};
`;
const DateLabel = styled.label`
  margin: 0.5rem 0;
  background-color: #ffffff;
  color: ${SECONDARY_FONT_COLOR};
  font-size: ${REGULAR_FONT_SIZE};
`;
type Props = {
  posts: IPost[];
};
const Blog: NextPage<Props> = ({ posts }: Props) => {
  return (
    <Layout>
      <div className="my-4 flex flex-col items-center">
        {posts.map((post) => (
          <PostContainer
            key={post.slug}
            className="grid sm:grid-cols-12 grid-cols-1 mx-2 my-4 md:w-full max-w-screen-md bg-white"
          >
            <section className="sm:col-span-8 flex flex-col h-full sm:pr-5 px-1">
              <SiteLink herf={`/blog/${post.slug}`}>
                <H3 className="mb-1">{post.metaData.title}</H3>
              </SiteLink>
              <Description className="grow">{post.metaData.description}</Description>
              <DateLabel className="sm:self-start self-end">{post.metaData.date}</DateLabel>
            </section>
            <figure className="sm:col-span-4 sm:block hidden w-full">
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
          </PostContainer>
        ))}
      </div>
    </Layout>
  );
};
export const getStaticProps: GetStaticProps = () => {
  const posts = getAllPosts();
  return {
    props: {
      posts,
    },
  };
};
export default Blog;
