import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';

function getPostsFolders(typeOfContent = 'blog', locale = 'en') {
  return fs
    .readdirSync(path.join(process.cwd(), '../../content', typeOfContent))
    .map((folderName) => ({
      directory: folderName,
      filename: `${folderName}${locale}.mdx`,
    }));
}

async function getDataFromFolders(mainFolder) {
  const folders = getPostsFolders(mainFolder);

  return folders.reduce((allDataFromFolder, { directory, filename }) => {
    const source = fs.readFileSync(
      path.join(process.cwd(), '/content', mainFolder, directory, filename),
      'utf8'
    );
    const { data, meta } = matter(source);

    return [
      {
        ...data,
        ...meta,
        slug: filename.replace('.mdx', ''),
      },
      ...allDataFromFolder,
    ];
  }, []);
}

console.log(getDataFromFolders('blog').then(console.log));

// export default function getDocBySlug(slug, locale = 'us') {
//   // const docsDirectory = path.join(process.cwd(), '/src/content');
//   const realSlug = slug.replace(/\.mdx$/, '');
//   const fullPath = path.join(docsDirectory, slug, `${realSlug}.${locale}.mdx`);
//   const fileContents = fs.readFileSync(fullPath, 'utf8');
//   const { content, data } = matter(fileContents);

//   return { slug: realSlug, meta: data, content };
// }

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
