const separator = () => '/';
export const homePath = () => `${separator()}`;
export const teamPath = () => `${separator()}team`;
export const openSourcePath = () => `${separator()}open-source`;
export const blogPath = (slug = '') =>
  `${separator()}blog${slug === '' ? '' : separator()}${slug}`;
export const blogPagePath = () => `${separator()}blog-page`;
export const careersPath = () => `${separator()}careers`;
export const careersPagePath = () => `${separator()}careers-page`;
