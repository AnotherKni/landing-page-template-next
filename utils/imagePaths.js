const isProd = process.env.NODE_ENV === "production";
const repoName = "landing-page-template-next";
const basePath = isProd ? `/${repoName}` : "";

export const getImagePath = (path) => {
  return `${basePath}${path}`;
};

export const imagePaths = {
  logo: {
    white: getImagePath("/images/noBgWhite.png"),
    color: getImagePath("/images/noBgColor.png"),
  },
  backgrounds: {
    bg1: {
      avif: getImagePath("/images/optimized/background-1.avif"),
      webp: getImagePath("/images/optimized/background-1.webp"),
      fallback: getImagePath("/images/background-1.jpg"),
    },
    bg2: {
      avif: getImagePath("/images/optimized/background-2.avif"),
      webp: getImagePath("/images/optimized/background-2.webp"),
      fallback: getImagePath("/images/background-2.jpg"),
    },
  },
};
