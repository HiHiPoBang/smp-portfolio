import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');
const readFile = (fileName: string) => {
  const postPath = join(postsDirectory, fileName);
  return fs.readFileSync(postPath, 'utf-8');
};
export const getPostBySlug = (slug: string) => {
  const fileContents = readFile(`${slug}.mdx`);
  const { data: metadata, content } = matter(fileContents);
  return { metadata, content, slug };
};
export const getPrevAndNextPostBySlug = (slug: string) => {
  const files = fs.readdirSync(postsDirectory);
  const index = files.findIndex((filename) => {
    return filename === `${slug}.mdx`;
  });
  const prevPostSlug = index > 0 ? files[index - 1].split('.')[0] : null;
  const prevPostMatter = prevPostSlug ? matter(readFile(`${prevPostSlug}.mdx`)) : { data: null };
  const nextPostSlug = index < files.length - 1 ? files[index + 1].split('.')[0] : null;
  const nextPostMatter = nextPostSlug ? matter(readFile(`${nextPostSlug}.mdx`)) : { data: null };

  return {
    prevPost: {
      metadata: prevPostMatter.data || {},
      slug: prevPostSlug,
    },
    nextPost: {
      metadata: nextPostMatter.data || {},
      slug: nextPostSlug,
    },
  };
};
type TypeGetPost = {
  page: number;
  size: 10;
};
export const getPosts = ({ page = 1, size = 10 }: TypeGetPost) => {
  const files = fs.readdirSync(postsDirectory);
  const total = files.length;
  const start = (page - 1) * size;
  const end = start + size;
  const posts = files
    .map((fileName) => getPostBySlug(fileName.split('.')[0]))
    .sort((post1, post2) => (post1.metadata.date > post2.metadata.date ? -1 : 1))
    .filter((_, index) => index >= start && index < end);

  return {
    posts,
    total,
  };
};
export const getAllPosts = () => {
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((fileName) => {
    const markdownWithMeta = readFile(fileName);
    const { data: metadata } = matter(markdownWithMeta);
    return {
      metadata,
      slug: fileName.split('.')[0],
    };
  });
  return posts;
};
