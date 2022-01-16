import { getPostBySlug, getAllPosts, getPrevAndNextPostBySlug } from '../../lib/api';
import mdxToMdxSource from '../../lib/mdxToMdxSource';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { NextPage } from 'next';
import Link from 'next/link';
import { Layout, H1, BlogBanner, MarkdownWrapper } from '../../components';
import next from 'next';

type PostType = {
  metaData: any;
  slug: string;
};
type Props = {
  metaData: any;
  mdxSource: MDXRemoteSerializeResult;
  slug: string;
  prevPost: PostType;
  nextPost: PostType;
};
type Params = {
  params: {
    slug: string;
  };
};
const Post: NextPage<Props> = ({ metaData, mdxSource, prevPost, nextPost }: Props) => {
  const renderPostLink = (post: any) => {
    return post.slug ? (
      <div>
        <Link href={post.slug}>
          <a>{post.metaData.title}</a>
        </Link>
      </div>
    ) : null;
  };
  return (
    <Layout>
      <div className="my-4 flex flex-col items-center">
        <div className="md:w-full max-w-screen-lg">
          <H1>{metaData.title}</H1>
          <BlogBanner src={metaData.thumbnailUrl} />
          <MarkdownWrapper>
            <MDXRemote {...mdxSource} />
          </MarkdownWrapper>
        </div>
        <div>
          {renderPostLink(prevPost)}
          {renderPostLink(nextPost)}
        </div>
      </div>
    </Layout>
  );
};
export const getStaticProps = async ({ params: { slug } }: Params) => {
  const { metaData, content } = getPostBySlug(slug);
  const { prevPost, nextPost } = getPrevAndNextPostBySlug(slug);
  const { mdxSource } = await mdxToMdxSource(content);

  return {
    props: {
      metaData,
      mdxSource,
      prevPost,
      nextPost,
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
