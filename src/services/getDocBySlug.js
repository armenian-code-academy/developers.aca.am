import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
const docsDirectory = path.join(process.cwd(), '/src/content');

export default function getDocBySlug(slug, locale = 'us') {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(docsDirectory, slug, `${realSlug}.${locale}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  console.log(fullPath);
  return { slug: realSlug, meta: data, content };
}
