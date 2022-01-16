import type { NextPage, GetStaticProps } from 'next';
import { getAllPosts } from '../../lib/api';
import { IPost } from '../../types/post';
import Link from 'next/link';
import { Layout } from '../../components';

type Props = {
  posts: IPost[];
};
const Blog: NextPage<Props> = ({ posts }: Props) => {
  return (
    <Layout>
      {posts.map((post) => (
        <Link href={'/blog/' + post.slug} passHref key={post.slug}>
          <a>
            {post.slug} <br></br>
          </a>
        </Link>
      ))}
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
