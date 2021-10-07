const separator = () => '/';

export const paths = {
  homePath: () => `${separator()}`,
  teamPath: () => `${separator()}team`,
  openSourcePath: () => `${separator()}open-source`,
  blogPath: (slug = '') =>
    `${separator()}blog${slug === '' ? '' : separator()}${slug}`,
  careersPath: () => `${separator()}careers`,
};
