import { useEffect, useState } from 'react';
import { getPostBySlug, getAllPosts, getPrevAndNextPostBySlug } from '../../lib/api';
import mdxToMdxSource from '../../lib/mdxToMdxSource';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { NextPage } from 'next';
import { Layout, H1, BlogBanner, MarkdownWrapper, SiteLink, Comment } from '../../components';
import { IPostMeta, IPost } from '../../types/post';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type PostType = {
  metaData: IPostMeta;
  slug: string;
};
type Props = {
  metaData: IPostMeta;
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
  const router = useRouter();
  const [isCommentRender, setIsCommentRender] = useState(true);

  useEffect(() => {
    const handleStart = () => {
      const isRender = !isCommentRender;
      setIsCommentRender(isRender);
    };
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStart);
    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStart);
    }
  }, [isCommentRender, router]);

  const renderBlogBanner = (metaData: IPostMeta) => {
    return metaData.thumbnailUrl ? <BlogBanner src={metaData.thumbnailUrl} /> : null;
  };
  const renderPostLink = (post: IPost, isNextPost: boolean) => {
    if (!post.slug) {
      return <span></span>;
    }
    const iconType = isNextPost ? 'angle-right' : 'angle-left';
    const text = isNextPost ? `${post.metaData.title}` : `${post.metaData.title}`;
    const linkContent = isNextPost ? (
      <span className="flex">
        {text}
        <FontAwesomeIcon className="mt-1 ml-4" icon={['fas', iconType]} />
      </span>
    ) : (
      <span className="flex">
        <FontAwesomeIcon className="mt-1 mr-4" icon={['fas', iconType]} />
        {text}
      </span>
    );
    return <SiteLink herf={post.slug}>{linkContent}</SiteLink>;
  };
  const renderCommentBox = (isRender: boolean) => {
    return isRender ? <Comment /> : null;
  };

  return (
    <Layout>
      <div className="py-14 px-4 flex flex-col items-center">
        <div className="w-full md:w-3/4 max-w-[1000px] min-h-screen">
          <H1>{metaData.title}</H1>
          {renderBlogBanner(metaData)}
          <MarkdownWrapper>
            <MDXRemote {...mdxSource} />
          </MarkdownWrapper>
        </div>
        <div className="grid justify-between grid-cols-2 gap-x-8 md:w-full max-w-screen-lg">
          <div className="cols-span-1">{renderPostLink(prevPost, false)}</div>
          <div className="cols-span-1 flex justify-end">{renderPostLink(nextPost, true)}</div>
        </div>
        {renderCommentBox(isCommentRender)}
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
      slug,
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
