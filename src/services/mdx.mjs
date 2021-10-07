import matter from 'gray-matter';
import path from 'path';
import fs from 'fs';
import { folderNames } from '../constants/folderName.constants';

export function getPostsFolders(typeOfContent = 'blog', locale = 'en') {
  return fs
    .readdirSync(
      path.join(
        process.cwd(),
        folderNames.getMdxContentFolderName(),
        typeOfContent
      )
    )
    .map((folderName) => ({
      directory: folderName,
      filename: `${folderName}.${locale}.mdx`,
    }));
}

export function getDataFromFolders(mainFolder, locale) {
  const folders = getPostsFolders(mainFolder, locale);

  return folders.reduce((allDataFromFolder, { directory, filename }) => {
    const source = fs.readFileSync(
      path.join(
        process.cwd(),
        folderNames.getMdxContentFolderName(),
        mainFolder,
        directory,
        filename
      ),
      'utf8'
    );
    const { data } = matter(source);

    return [
      {
        data,
        slug: directory,
      },
      ...allDataFromFolder,
    ];
  }, []);
}

export function getDocBySlug(typeOfContent, slug, locale = 'en') {
  const docsDirectory = path.join(
    process.cwd(),
    folderNames.getMdxContentFolderName()
  );
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(
    docsDirectory,
    typeOfContent,
    slug,
    `${realSlug}.${locale}.mdx`
  );
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { content, data } = matter(fileContents);

  return { slug: realSlug, meta: data, content };
}
