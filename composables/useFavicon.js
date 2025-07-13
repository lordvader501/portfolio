export function useFavicon() {
  const updateFavicon = (isDark) => {
    if (process.client) {
      const existingIcons = document.querySelectorAll('link[rel="icon"]');
      existingIcons.forEach((el) => el.parentNode.removeChild(el));

      // Create a new link
      const favicon = document.createElement("link");
      favicon.rel = "icon";
      favicon.type = "image/png";
      favicon.href = isDark ? "/favicon-dark.png" : "/favicon-light.png";

      document.head.appendChild(favicon);
    }
  };

  const initializeFavicon = () => {
    if (process.client) {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      const isDark = prefersDarkScheme.matches;
      updateFavicon(isDark);
    }
  };

  return {
    updateFavicon,
    initializeFavicon,
  };
}
