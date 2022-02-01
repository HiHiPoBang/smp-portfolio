import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = process.env.NODE_ENV === 'development' ? path.join('public/_posts') : path.join('_posts');
const readFile = (fileName: string) => {
  const postPath = path.join(postsDirectory, fileName);
  return fs.readFileSync(postPath, 'utf-8');
};
export const getPostBySlug = (slug: string) => {
  const fileContents = readFile(`${slug}.mdx`);
  const { data: metaData, content } = matter(fileContents);
  return { metaData, content, slug };
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
      metaData: prevPostMatter.data || {},
      slug: prevPostSlug,
    },
    nextPost: {
      metaData: nextPostMatter.data || {},
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
    .sort((post1, post2) => (post1.metaData.date > post2.metaData.date ? -1 : 1))
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
    const { data: metaData } = matter(markdownWithMeta);
    return {
      metaData,
      slug: fileName.split('.')[0],
    };
  });
  return posts;
};
