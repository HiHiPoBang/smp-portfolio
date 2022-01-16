import { getPostBySlug, getAllPosts } from '../../lib/api';
import mdxToMdxSource from '../../lib/mdxToMdxSource';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { NextPage } from 'next';
import { Layout, H1, BlogBanner, MarkdownWrapper } from '../../components';

type Props = {
  mdxSource: MDXRemoteSerializeResult;
  slug: string;
};
type Params = {
  params: {
    slug: string;
  };
};
const Post: NextPage<Props> = ({ mdxSource, slug }: Props) => {
  return (
    <Layout>
      <div className="my-4 flex flex-col items-center">
        <div className="md:w-full max-w-screen-lg">
          <H1>{slug}</H1>
          <BlogBanner src={`/assets/blog/highcharts-component-library/highcharts-component-library.jpeg`} />
          <MarkdownWrapper>
            <MDXRemote {...mdxSource} />
          </MarkdownWrapper>
        </div>
      </div>
    </Layout>
  );
};
export const getStaticProps = async ({ params: { slug } }: Params) => {
  const markdownWithMeta = getPostBySlug(slug);
  const { mdxSource } = await mdxToMdxSource(markdownWithMeta);
  return {
    props: {
      slug,
      mdxSource,
    },
  };
};
export const getStaticPaths = () => {
  const posts = getAllPosts();
  const paths = posts.map((post) => {
    return {
      params: {
        slug: post.slug,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
};
export default Post;
