import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join('_posts');
const readFileBySlug = (slug: string) => {
  const postPath = path.join('_posts', `${slug}.mdx`);
  return fs.readFileSync(postPath, 'utf-8');
};
export const getPostBySlug = (slug: string /*fields = []*/) => {
  const fileContents = readFileBySlug(slug);
  const { data: metaData, content } = matter(fileContents);
  return { metaData, content };
};
export const getPrevAndNextPostBySlug = (slug: string) => {
  const files = fs.readdirSync(postsDirectory);
  const index = files.findIndex((filename) => {
    return filename === `${slug}.mdx`;
  });
  const prevPostSlug = index > 0 ? files[index - 1].split('.')[0] : null;
  const prevPostMatter = prevPostSlug ? matter(readFileBySlug(prevPostSlug)) : { data: null };
  const nextPostSlug = index < files.length - 1 ? files[index + 1].split('.')[0] : null;
  const nextPostMatter = nextPostSlug ? matter(readFileBySlug(nextPostSlug)) : { data: null };

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

export const getAllPosts = () => {
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((fileName) => {
    const markdownWithMeta = fs.readFileSync(path.join('_posts', fileName), 'utf-8');
    const { data: metaData } = matter(markdownWithMeta);
    return {
      metaData,
      slug: fileName.split('.')[0],
    };
  });
  return posts;
};
