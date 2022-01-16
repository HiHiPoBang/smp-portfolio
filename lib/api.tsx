import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join('_posts');

export const getPostBySlug = (slug: string /*fields = []*/) => {
  return fs.readFileSync(path.join('_posts', `${slug}.mdx`), 'utf-8');
};
export const getPrevAndNextPostBySlug = (slug: string) => {
  const files = fs.readdirSync(postsDirectory);
  const index = files.findIndex((filename) => {
    return filename === `${slug}.mdx`;
  });
  return {
    prevSlug: index > 0 ? files[index - 1].split('.')[0] : null,
    nextSlug: index < files.length - 1 ? files[index + 1].split('.')[0] : null,
  };
};

export const getAllPosts = () => {
  const files = fs.readdirSync(postsDirectory);
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('_posts', filename), 'utf-8');
    const { data: frontMatter } = matter(markdownWithMeta);
    return {
      frontMatter,
      slug: filename.split('.')[0],
    };
  });
  return posts;
};
