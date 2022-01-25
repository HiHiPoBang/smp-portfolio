import { useEffect, useState } from 'react';
import { getPostBySlug, getAllPosts, getPrevAndNextPostBySlug } from '../../lib/api';
import mdxToMdxSource from '../../lib/mdxToMdxSource';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import type { NextPage } from 'next';
import { Layout, H1, BlogBanner, MarkdownWrapper, SiteLink, Comment } from '../../components';
import { IPostMeta, IPost } from '../../types/post';
import { useRouter } from 'next/router';

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
  }, [isCommentRender, router]);

  const renderBlogBanner = (metaData: IPostMeta) => {
    return metaData.thumbnailUrl ? <BlogBanner src={metaData.thumbnailUrl} /> : null;
  };
  const renderPostLink = (post: IPost, isNextPost: boolean) => {
    if (!post.slug) {
      return null;
    }
    const text = isNextPost ? `${post.metaData.title}` : `${post.metaData.title}`;
    const alignClass = isNextPost ? 'float-right' : 'float-left';
    return (
      <SiteLink herf={post.slug}>
        <span className={`top ${alignClass}`}>{text}</span>
      </SiteLink>
    );
  };
  const renderCommentBox = (isRender: boolean) => {
    return isRender ? <Comment/> : null;
  }
  
  return (
    <Layout>
      <div className="py-14 flex flex-col items-center">
        <div className="md:w-full max-w-screen-lg min-h-screen">
          <H1>{metaData.title}</H1>
          {renderBlogBanner(metaData)}
          <MarkdownWrapper>
            <MDXRemote {...mdxSource} />
          </MarkdownWrapper>
        </div>
        <div className="grid justify-between grid-cols-2 md:w-full max-w-screen-lg">
          {renderPostLink(prevPost, false)}
          {renderPostLink(nextPost, true)}
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
