const isProd = process.env.NODE_ENV === "production";
const repoName = "landing-page-template-next";

export const getAssetPath = (path: string): string => {
  if (isProd) {
    return `/${repoName}${path}`;
  }
  return path;
};

export const getImagePath = (path: string): string => {
  return getAssetPath(path);
};
