import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize'

const mdxToMdxSource = async (mdx: any) => {
  const { data: frontMatter, content } = matter(mdx);
  const mdxSource = await serialize(content);
  return {
    frontMatter,
    mdxSource,
  }
};

export default mdxToMdxSource;