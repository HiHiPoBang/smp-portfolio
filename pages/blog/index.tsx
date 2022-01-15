import { getAllPosts } from '../../lib/api'; 
import type { NextPage } from 'next'
import Link from 'next/link';
import Layout from '../../components/Layout';

const Blog: NextPage = ({ posts }: any) => {
  return (
    <Layout>
      {
        posts.map((post: any) => (
          <Link href={'/blog/' + post.slug} passHref key={post.slug}>
            <a>{post.slug} <br></br></a>
          </Link>
        ))
      }
    </Layout>
  )
}
export const getStaticProps = () => {
  const posts = getAllPosts();
  return {
    props: {
      posts
    }
  }
}
export default Blog;