import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

const postsDirectory = path.join('_posts')


export const getPostBySlug = (slug: string, fields = []) => {
  return fs.readFileSync(path.join('_posts', `${slug}.mdx`), 'utf-8');
};

export const getAllPosts = () => {
  const files = fs.readdirSync(postsDirectory)
  const posts = files.map(filename => {
    const markdownWithMeta = fs.readFileSync(path.join('_posts', filename), 'utf-8')
    const { data: frontMatter } = matter(markdownWithMeta)
    return {
      frontMatter,
      slug: filename.split('.')[0]
    }
  })
  return posts;
};