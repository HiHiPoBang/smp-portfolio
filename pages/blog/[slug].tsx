import { getPostBySlug, getAllPosts } from '../../lib/api';
import mdxToMdxSource from '../../lib/mdxToMdxSource';
import { MDXRemote } from 'next-mdx-remote';
import type { NextPage } from 'next';
import Layout from '../../components/Layout';

const Post: NextPage = ({ mdxSource }: any) => {
  return (
    <Layout>
      <MDXRemote {...mdxSource} />
    </Layout>
  );
};
type Params = {
  params: {
    slug: string;
  };
};
export const getStaticProps = async ({ params: { slug } }: Params) => {
  const markdownWithMeta = getPostBySlug(slug);
  const { frontMatter, mdxSource } = await mdxToMdxSource(markdownWithMeta);
  return {
    props: {
      frontMatter,
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
