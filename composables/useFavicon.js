export function useFavicon() {
  const updateFavicon = (isDark) => {
    if (process.client) {
      const favicon = document.querySelector('link[rel="icon"]');
      favicon.rel = "icon";
      console.log(favicon);

      // Set favicon based on theme
      if (isDark) {
        favicon.href = "/favicon-dark.png";
      } else {
        favicon.href = "/favicon-light.png";
      }

      // Append to head if it doesn't exist
      if (!document.querySelector('link[rel="icon"]')) {
        document.head.appendChild(favicon);
      }
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
