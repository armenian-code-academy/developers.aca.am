import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

export default function getDocBySlug(slug, locale = 'us') {
  const docsDirectory = path.join(process.cwd(), '/src/content');
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(docsDirectory, slug, `${realSlug}.${locale}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}

// export default function getDocBySlug(slug, locale = 'us') {
//   const docsDirectory = path.join(process.cwd(), '/src/content');
//   const realSlug = slug.replace(/\.mdx$/, '');
//   const fullPath = path.join(docsDirectory, slug, `${realSlug}.${locale}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { data, content, excerpt } = matter(fileContents, {
//     excerpt_separator: '->',
//   });
//   console.log(data, content, excerpt);
//   return { slug: realSlug, meta: data, content };
// }
