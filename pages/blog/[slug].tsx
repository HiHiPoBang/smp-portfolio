import { getPostBySlug, getAllPosts } from '../../lib/api';
import mdxToMdxSource from '../../lib/mdxToMdxSource';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { NextPage } from 'next';
import Layout from '../../components/Layout';

type Props = {
  mdxSource: MDXRemoteSerializeResult,
}
type Params = {
  params: {
    slug: string;
  };
};
const Post: NextPage<Props> = ({ mdxSource }: Props) => {
  return (
    <Layout>
      <MDXRemote {...mdxSource} />
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
